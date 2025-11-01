<?php
// Simple PHP E-commerce Site
// This is a basic demonstration of PHP e-commerce functionality

session_start();

// Database configuration (in a real application, this would be in a separate config file)
$host = 'localhost';
$dbname = 'ecommerce_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Include necessary files
require_once 'classes/User.php';
require_once 'classes/Product.php';
require_once 'classes/Cart.php';
require_once 'classes/Order.php';

// Initialize cart if not exists
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Handle routing
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

switch ($page) {
    case 'home':
        include 'pages/home.php';
        break;
    case 'products':
        include 'pages/products.php';
        break;
    case 'product':
        include 'pages/product.php';
        break;
    case 'cart':
        include 'pages/cart.php';
        break;
    case 'checkout':
        include 'pages/checkout.php';
        break;
    case 'login':
        include 'pages/login.php';
        break;
    case 'register':
        include 'pages/register.php';
        break;
    case 'logout':
        session_destroy();
        header('Location: index.php');
        break;
    default:
        include 'pages/404.php';
        break;
}

// Include header
include 'includes/header.php';

// Include main content based on page

// Include footer
include 'includes/footer.php';
?>