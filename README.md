# Portfolio Website - Reza Pahlevi

A minimalist personal portfolio website built with Next.js and Tailwind CSS.

## Features

- **Minimalist Design**: Clean white-gray color scheme with accent colors
- **Fully Responsive**: Mobile-first design with Tailwind CSS
- **Fast Performance**: Optimized with Next.js Image and lazy loading
- **Data-Driven**: Projects loaded from JSON files (easy to update)
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessible**: WCAG compliant color contrast and semantic markup

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Vercel

## Project Structure

```
reza-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── ProjectGrid.tsx    # Projects grid
│   ├── ProjectCard.tsx    # Individual project card
│   └── Footer.tsx         # Footer with contact info
├── content/               # Static content
│   └── projects.json      # Project data
├── lib/                   # Utility functions
│   └── projects.ts        # Project data helpers
├── public/                # Static assets
│   └── images/projects/   # Project thumbnails
└── docs/                  # Documentation
    ├── 00-RESEARCH-REFERENCES.md
    ├── 01-BRD.md
    └── 02-PRD.md
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Adding New Projects

To add a new project, simply add an entry to `content/projects.json`:

```json
{
  "slug": "project-name",
  "title": "Project Title",
  "description": "Project description...",
  "techStack": ["React", "TypeScript", "Tailwind"],
  "repoUrl": "https://github.com/username/repo",
  "demoUrl": "https://demo-url.vercel.app",
  "thumbnail": "/images/projects/project-name.png",
  "featured": true
}
```

The project will automatically appear in the portfolio grid without any code changes.

## Design System

### Colors
- Background: `#FFFFFF`
- Surface: `#F5F5F5` (cards, alternate sections)
- Border: `#E5E5E5`
- Text: `#171717` (almost black)
- Text Muted: `#6B7280` (gray for secondary text)
- Accent: `#2563EB` (blue for links/CTAs)

### Typography
- Font: Inter (via `next/font`)
- Responsive typography scale

### Layout
- Max content width: `1200px`
- Grid: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- Consistent spacing with Tailwind scale

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## License

Private project - All rights reserved.
