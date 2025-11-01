# Laravel Task Manager

A simple task management application built with Laravel, demonstrating CRUD operations and authentication.

## Features

- User authentication
- Task CRUD operations (Create, Read, Update, Delete)
- Task status management (Pending, In Progress, Completed)
- Responsive design
- Form validation
- Flash messages

## Technologies Used

- Laravel 10+
- PHP 8.1+
- MySQL/PostgreSQL
- Bootstrap 5
- Blade templating

## Installation

### Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js and npm (for frontend assets)
- MySQL or PostgreSQL database

### Setup

1. Clone the repository:
```bash
git clone https://github.com/johndoe/laravel-tasks.git
cd laravel-tasks
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install Node.js dependencies:
```bash
npm install
```

4. Copy the environment file:
```bash
cp .env.example .env
```

5. Generate application key:
```bash
php artisan key:generate
```

6. Configure your database in `.env` file:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_tasks
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

7. Run database migrations:
```bash
php artisan migrate
```

8. Build frontend assets:
```bash
npm run build
```

9. Start the development server:
```bash
php artisan serve
```

The application will be available at `http://localhost:8000`

## Usage

### Authentication

- Register a new account or login with existing credentials
- All task operations require authentication

### Managing Tasks

- **Create**: Click "Add New Task" to create a new task
- **Read**: View all tasks on the dashboard
- **Update**: Click "Edit" on any task to modify it
- **Delete**: Click "Delete" to remove a task

### Task Status

Tasks can have three statuses:
- **Pending**: Task has been created but not started
- **In Progress**: Task is currently being worked on
- **Completed**: Task has been finished

## Project Structure

```
laravel-tasks/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── TaskController.php
│   │   └── Middleware/
│   ├── Models/
│   │   └── Task.php
│   └── Providers/
├── database/
│   ├── migrations/
│   │   └── create_tasks_table.php
│   └── seeders/
├── public/
├── resources/
│   ├── css/
│   ├── js/
│   └── views/
│       ├── layouts/
│       │   └── app.blade.php
│       └── tasks/
│           ├── index.blade.php
│           ├── create.blade.php
│           ├── edit.blade.php
│           └── show.blade.php
├── routes/
│   └── web.php
├── tests/
├── .env.example
├── composer.json
├── package.json
└── README.md
```

## Key Features Demonstrated

### MVC Architecture
- Model: `Task` model with Eloquent ORM
- View: Blade templates for rendering
- Controller: `TaskController` for handling requests

### Database Migrations
- Creating tables with proper schema
- Foreign key relationships
- Database seeding

### Form Validation
- Server-side validation with Laravel's validation rules
- Custom error messages
- Input sanitization

### Authentication
- Laravel's built-in authentication system
- Protected routes
- User session management

### Routing
- RESTful resource routes
- Named routes for easy URL generation
- Route model binding

## Database Schema

### Tasks Table
```sql
CREATE TABLE tasks (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
    user_id BIGINT UNSIGNED,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

## Testing

Run the test suite:
```bash
php artisan test
```

## Deployment

### Production Setup

1. Set `APP_ENV=production` in `.env`
2. Configure production database
3. Run migrations: `php artisan migrate`
4. Build assets: `npm run build`
5. Set proper file permissions
6. Configure web server (Apache/Nginx)

### Environment Variables
```env
APP_NAME=Laravel
APP_ENV=production
APP_KEY=base64:key
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_db
DB_USERNAME=your_user
DB_PASSWORD=your_password
```

## Security

- CSRF protection on all forms
- SQL injection prevention with Eloquent
- XSS protection with Blade templating
- Secure password hashing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Author

John Doe - Learning Laravel framework for modern PHP development.