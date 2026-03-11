# Mike Angelo R. Casono - Portfolio Website

A professional portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Designed to showcase AI-assisted system development skills and attract freelance clients.

## Features

- **Modern & Clean Design**: Professional UI/UX with minimalist aesthetics
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Fast Performance**: Optimized with Next.js for quick loading times
- **Smooth Animations**: Subtle animations using Framer Motion
- **SEO Optimized**: Meta tags and structured data for better visibility
- **Easy to Customize**: Well-organized component structure

## Sections

1. **Navbar** - Sticky navigation with smooth scroll and mobile menu
2. **Hero** - Professional introduction with profile image and CTAs
3. **Services** - What you offer to clients
4. **Projects** - Portfolio showcase with filtering
5. **Skills** - Technical expertise organized by category
6. **About Me** - Personal introduction and background
7. **Why Work With Me** - Value proposition section
8. **Testimonials** - Client/collaborator feedback
9. **Contact** - Contact form and social links
10. **Footer** - Quick links and additional info

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the portfolio folder:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Add Your Profile Photo

Replace the placeholder with your actual photo:

1. Add your photo to `public/profile.jpg`
2. For best results:
   - Use a high-quality professional photo
   - Square aspect ratio works best (e.g., 800x800px)
   - Keep file size under 500KB for optimal loading

### 2. Update Personal Information

Edit the following files to update your details:

**Contact Information** (`src/components/Contact.tsx`):
- Email address
- Phone number
- Location
- Social media links

**Footer** (`src/components/Footer.tsx`):
- Social media links
- Email address

### 3. Update Projects

Edit `src/components/Projects.tsx` to add your real projects:

```tsx
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    image: "/projects/your-project.jpg",  // Add image to public/projects/
    technologies: ["React", "Node.js", "MySQL"],
    category: "Management",
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  // Add more projects...
];
```

### 4. Update Testimonials

Edit `src/components/Testimonials.tsx` with real testimonials:

```tsx
const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Their Role",
    company: "Company Name",
    content: "What they said about your work...",
  },
  // Add more testimonials...
];
```

### 5. Add Your CV

Place your CV file as `public/Mike_Angelo_Casono_CV.pdf`

### 6. Update SEO Metadata

Edit `src/app/layout.tsx` to update:
- Website title
- Description
- Keywords
- Open Graph images
- Twitter card data

### 7. Add Project Images

1. Create images for each project (800x450px recommended)
2. Save them in `public/projects/`
3. Update image paths in Projects component

## Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg              # Your profile photo
│   ├── profile-placeholder.svg  # Placeholder image
│   ├── projects/                # Project images
│   │   ├── plant-disease.svg
│   │   ├── inventory.svg
│   │   └── ...
│   └── Mike_Angelo_Casono_CV.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Main page component
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   ├── WhyWorkWithMe.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── context/
│       └── ThemeContext.tsx     # Dark/light mode context
├── package.json
├── tailwind.config.js
├── next.config.ts
└── README.md
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can also be deployed to:
- Netlify
- Railway
- Any platform supporting Node.js

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Mike Angelo R. Casono**
