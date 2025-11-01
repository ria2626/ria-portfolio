<?php
/**
 * Plugin Name: Custom Contact Form
 * Plugin URI: https://example.com/custom-contact-form
 * Description: A custom WordPress plugin that adds an advanced contact form with validation and email integration.
 * Version: 1.0.0
 * Author: John Doe
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: custom-contact-form
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('CCF_VERSION', '1.0.0');
define('CCF_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CCF_PLUGIN_URL', plugin_dir_url(__FILE__));

// Include necessary files
require_once CCF_PLUGIN_DIR . 'includes/class-contact-form.php';
require_once CCF_PLUGIN_DIR . 'includes/class-admin-settings.php';

// Initialize the plugin
class CustomContactForm {

    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_shortcode('custom_contact_form', array($this, 'render_contact_form'));
        add_action('wp_ajax_submit_contact_form', array($this, 'handle_form_submission'));
        add_action('wp_ajax_nopriv_submit_contact_form', array($this, 'handle_form_submission'));
    }

    public function init() {
        // Load text domain for internationalization
        load_plugin_textdomain('custom-contact-form', false, dirname(plugin_basename(__FILE__)) . '/languages/');
    }

    public function enqueue_scripts() {
        wp_enqueue_style('ccf-styles', CCF_PLUGIN_URL . 'assets/css/contact-form.css', array(), CCF_VERSION);
        wp_enqueue_script('ccf-scripts', CCF_PLUGIN_URL . 'assets/js/contact-form.js', array('jquery'), CCF_VERSION, true);
        wp_localize_script('ccf-scripts', 'ccf_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('ccf_nonce')
        ));
    }

    public function render_contact_form($atts) {
        ob_start();
        include CCF_PLUGIN_DIR . 'templates/contact-form.php';
        return ob_get_clean();
    }

    public function handle_form_submission() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'ccf_nonce')) {
            wp_die('Security check failed');
        }

        // Sanitize and validate form data
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $message = sanitize_textarea_field($_POST['message']);

        // Basic validation
        if (empty($name) || empty($email) || empty($message)) {
            wp_send_json_error('All fields are required');
        }

        if (!is_email($email)) {
            wp_send_json_error('Invalid email address');
        }

        // Send email
        $to = get_option('admin_email');
        $subject = 'New Contact Form Submission';
        $body = "Name: $name\nEmail: $email\nMessage: $message";

        if (wp_mail($to, $subject, $body)) {
            wp_send_json_success('Message sent successfully');
        } else {
            wp_send_json_error('Failed to send message');
        }
    }
}

// Initialize the plugin
new CustomContactForm();

// Activation hook
register_activation_hook(__FILE__, 'ccf_activate');
function ccf_activate() {
    // Create database table if needed
    // Add default options
    add_option('ccf_recaptcha_site_key', '');
    add_option('ccf_recaptcha_secret_key', '');
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'ccf_deactivate');
function ccf_deactivate() {
    // Cleanup if necessary
}