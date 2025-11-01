# PHP E-commerce Site

A full-featured e-commerce website built with PHP, featuring user authentication, product management, and payment integration.

## Features

- User registration and authentication
- Product catalog with categories
- Shopping cart functionality
- Checkout process
- Order management
- Admin panel for product management
- Search functionality
- Responsive design

## Technologies Used

- PHP 7+
- MySQL
- HTML5/CSS3
- JavaScript/jQuery
- PDO for database interactions

## Installation

1. Clone or download the project files
2. Create a MySQL database
3. Import the `database.sql` file
4. Update database configuration in `index.php`
5. Upload files to your web server
6. Access the site through your browser

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Products Table
```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50),
    image VARCHAR(255),
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Orders Table
```sql
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## File Structure

```
php-ecommerce/
├── index.php                 # Main entry point
├── classes/
│   ├── User.php              # User management class
│   ├── Product.php           # Product management class
│   ├── Cart.php              # Shopping cart class
│   └── Order.php             # Order management class
├── includes/
│   ├── header.php            # HTML header
│   └── footer.php            # HTML footer
├── pages/
│   ├── home.php              # Home page
│   ├── products.php          # Product listing
│   ├── product.php           # Single product view
│   ├── cart.php              # Shopping cart
│   ├── checkout.php          # Checkout process
│   ├── login.php             # User login
│   ├── register.php          # User registration
│   └── 404.php               # 404 error page
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   └── js/
│       └── script.js         # JavaScript functionality
└── database.sql              # Database schema
```

## Security Features

- Password hashing with bcrypt
- Prepared statements to prevent SQL injection
- Input sanitization
- CSRF protection
- Session management

## Development Notes

This project demonstrates core PHP concepts including:

- Object-oriented programming
- MVC-like structure
- Database interactions with PDO
- Session handling
- Form validation
- File uploads
- Error handling

## Author

John Doe - Software Developer with 10+ years experience in PHP development.