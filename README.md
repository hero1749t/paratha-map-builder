# Paratha Map Builder

Discover the best paratha restaurants and dhabas near you with our interactive map-based application.

## Project Overview

A modern, responsive web application for finding and exploring authentic paratha restaurants and dhaba eateries. Built with React, TypeScript, and Tailwind CSS, featuring an intuitive UI with location-based mapping and restaurant reviews.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd paratha-map-builder

# Step 3: Install dependencies
npm install
# or
yarn install

# Step 4: Start the development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn-ui components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── MenuSection.tsx
│   ├── ReviewsSection.tsx
│   └── ...
├── pages/           # Route pages
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── App.tsx          # Main application component
```

## 🛠️ Available Scripts

```sh
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🎨 Technologies Used

- **Vite** - Fast frontend build tool
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - High-quality React components
- **React Router** - Client-side routing
- **TanStack Query** - Server state management
- **Vitest** - Unit testing framework

## 📦 Deployment

### Build for Production

```sh
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel (Recommended)

```sh
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```sh
npm run build
# Upload the dist/ folder to your hosting service
```

### Deploy to Other Platforms

The `dist/` folder can be deployed to:
- **Netlify**
- **AWS S3 + CloudFront**
- **Firebase Hosting**
- **DigitalOcean**
- **Render**
- **Railway.app**

## 🔧 Configuration

- **Vite Config**: [vite.config.ts](vite.config.ts)
- **TypeScript Config**: [tsconfig.json](tsconfig.json)
- **Tailwind Config**: [tailwind.config.ts](tailwind.config.ts)
- **ESLint Config**: [eslint.config.js](eslint.config.js)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, issues, or suggestions, please create an issue in the repository.
