# MathsWeb - Mathematics Tutoring Website

A professional, modern website for mathematics tutoring classes (Grades 6-11 O/L) built with React and deployed on Vercel.

## Features

- 🎨 Professional dark theme with black and orange color scheme
- 📱 Fully responsive design for all devices
- 🧭 Easy navigation with React Router
- 📚 Classes information and schedules
- 📝 Latest updates and educational posts
- 💝 Volunteering and free support program information
- 📧 Contact form with validation
- ⚡ Fast loading with Vite
- 🚀 Deployed on Vercel

## Tech Stack

- React 18
- React Router DOM
- React Icons
- Vite
- CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## Deploy to Vercel

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Run deployment:
```bash
vercel
```

Or simply connect your GitHub repository to Vercel for automatic deployments.

## Customization

### Update Contact Information

Edit the following files to update contact details:
- `src/components/Footer.jsx` - Footer contact info
- `src/pages/Contact.jsx` - Contact page details

### Update Classes Information

Edit `src/pages/Classes.jsx` to modify:
- Class schedules
- Topics covered
- Pricing
- Posts and updates
- Volunteering programs

### Change Colors

Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-black: #0a0a0a;
  --primary-orange: #ff6600;
  /* ... other colors */
}
```

## Project Structure

```
MathsWeb/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Classes.jsx
│   │   ├── Classes.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## License

This project is open source and available for educational purposes.

## Support

For any questions or issues, please use the contact form on the website.
