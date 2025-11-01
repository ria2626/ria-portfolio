# Custom Contact Form WordPress Plugin

A custom WordPress plugin that adds an advanced contact form with validation and email integration.

## Features

- Shortcode support: `[custom_contact_form]`
- AJAX form submission
- Client-side and server-side validation
- Email notifications
- Customizable styling
- Admin settings page
- reCAPTCHA integration (optional)

## Installation

1. Download the plugin files
2. Upload the `custom-contact-form` folder to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Use the shortcode `[custom_contact_form]` in your posts or pages

## Usage

### Basic Usage

Add the contact form to any post or page using the shortcode:

```
[custom_contact_form]
```

### Customization

The plugin includes customizable CSS and JavaScript files that can be modified to match your theme's design.

## File Structure

```
custom-contact-form/
├── index.php                 # Main plugin file
├── readme.md                 # This file
├── includes/
│   ├── class-contact-form.php    # Contact form class
│   └── class-admin-settings.php  # Admin settings class
├── templates/
│   └── contact-form.php          # Contact form template
├── assets/
│   ├── css/
│   │   └── contact-form.css      # Plugin styles
│   └── js/
│       └── contact-form.js       # Plugin scripts
└── languages/                    # Translation files
```

## Development

This plugin demonstrates best practices for WordPress plugin development including:

- Proper plugin structure
- Security measures (nonces, sanitization)
- AJAX handling
- Shortcode implementation
- Internationalization support
- Activation/deactivation hooks

## Requirements

- WordPress 5.0 or higher
- PHP 7.0 or higher

## License

This plugin is licensed under the GPL v2 or later.

## Author

John Doe - Software Developer with 10+ years experience in WordPress development.