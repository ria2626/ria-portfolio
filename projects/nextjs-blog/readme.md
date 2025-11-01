# Next.js Blog Application

A modern blog application built with Next.js, featuring server-side rendering and dynamic content management.

## Features

- Server-side rendering (SSR)
- Static site generation (SSG)
- Markdown-based content management
- Responsive design
- SEO optimized
- Fast loading times
- Dynamic routing

## Technologies Used

- Next.js 13+
- React 18+
- Markdown processing with remark
- CSS Modules for styling
- TypeScript support

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johndoe/nextjs-blog.git
cd nextjs-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-blog/
├── pages/
│   ├── index.js              # Home page
│   ├── posts/
│   │   └── [slug].js         # Dynamic post pages
│   ├── about.js              # About page
│   └── contact.js            # Contact page
├── components/
│   ├── Layout.js             # Main layout component
│   ├── Header.js             # Header component
│   └── Footer.js             # Footer component
├── lib/
│   └── posts.js              # Utility functions for posts
├── posts/                    # Markdown blog posts
│   ├── hello-world.md
│   └── another-post.md
├── public/                   # Static assets
│   └── images/
├── styles/
│   ├── globals.css           # Global styles
│   └── Home.module.css       # Component styles
├── package.json
└── README.md
```

## Content Management

Blog posts are written in Markdown and stored in the `posts/` directory. Each post should have frontmatter with the following fields:

```markdown
---
title: "My Blog Post"
date: "2023-01-01"
excerpt: "A brief description of the post"
---

# My Blog Post

Content goes here...
```

## Key Features Demonstrated

### Server-Side Rendering
- Pages are rendered on the server for better SEO and performance
- `getStaticProps` for static generation
- `getServerSideProps` for dynamic content

### Dynamic Routing
- File-based routing with `[slug].js` for dynamic post pages
- Automatic route generation based on post slugs

### Markdown Processing
- Server-side Markdown parsing with remark
- Syntax highlighting for code blocks
- Frontmatter extraction with gray-matter

### Performance Optimization
- Automatic code splitting
- Image optimization with Next.js Image component
- CSS optimization and minification

## Deployment

This application can be deployed to Vercel, Netlify, or any platform that supports Next.js:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy

## Customization

- Modify styles in `styles/` directory
- Add new pages in `pages/` directory
- Create reusable components in `components/` directory
- Update site configuration in `next.config.js`

## Author

John Doe - Software Developer with 2+ years experience in Next.js and React development.