# Dynamic Portfolio Using Laravel and Inertia (ReactJs)

A modern, dynamic portfolio web application built with [Laravel](https://laravel.com/) (backend) and [ReactJs](https://react.dev/) via [Inertia.js](https://inertiajs.com/) (frontend).  
Showcase your skills, projects, experience, and services with a fully customizable admin panel.

---

## Features

- **Dynamic Portfolio Management:** Add, edit, and categorize portfolio items.
- **Experience & Skills Section:** Display professional experience and technical skills with progress bars.
- **Services Listing:** Highlight your offered services with icons and descriptions.
- **Hero & About Section:** Customizable hero banner, profile image, and personal introduction.
- **Contact Form:** Visitors can send messages directly from the site.
- **Admin Panel:** Manage all content (portfolio, skills, services, etc.) from a secure backend.
- **Responsive Design:** Mobile-friendly and optimized for all devices.
- **SEO Friendly:** Clean URLs and meta tags for better search engine visibility.

---

## Tech Stack

- **Backend:** Laravel 12+
- **Frontend:** ReactJs (via Inertia.js)
- **Database:** MySQL
- **Styling:** Bootstrap, Tailwind CSS, custom SCSS
- **Other:** Isotope.js (filtering), GLightbox (gallery), AOS (animations)

---

## Getting Started

### Prerequisites

- PHP >= 8.1
- Composer
- Node.js & npm
- MySQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install PHP dependencies:**
   ```bash
   composer install
   ```

3. **Install JS dependencies:**
   ```bash
   npm install
   ```

4. **Copy `.env` and set up your environment:**
   ```bash
   cp .env.example .env
   # Edit .env for your DB and mail settings
   ```

5. **Generate application key:**
   ```bash
   php artisan key:generate
   ```

6. **Run migrations and seeders:**
   ```bash
   php artisan migrate --seed
   ```

7. **Build frontend assets:**
   ```bash
   npm run build
   ```

8. **Start the development server:**
   ```bash
   php artisan serve
   ```

---

## Usage

- Access the site at `http://localhost`
- Login to the admin panel to manage portfolio content
- Update profile, hero section, skills, services, and more

---

## Customization

- Update images in `/storage/app/public/`
- Change section content via the admin panel or seeders
- Modify styles in `resources/css` or `resources/js/Components`

