# Modern Portfolio Website

A beautiful, interactive, and responsive portfolio website built with React, Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Type Safe**: Written in TypeScript for better code quality
- **SEO Optimized**: Proper meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Hi, I'm Your Name" to your actual name
   - Update the description and social links
   - Add your actual GitHub, LinkedIn, and email

2. **About Section** (`src/components/About.tsx`):
   - Update your story and background
   - Modify the skills and their proficiency levels
   - Customize the highlights section

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace the example projects with your actual projects
   - Add real project images (replace placeholder URLs)
   - Update project links and GitHub repositories

4. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Modify social media links
   - Customize the contact form (add actual form submission)

### Styling
- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/app/globals.css`
- Animation variants are in `src/utils/animations.ts`

### SEO & Metadata
Update `src/app/layout.tsx` with:
- Your name and title
- Description
- Social media handles
- Website URL

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── About.tsx            # About section
│   ├── AnimatedSection.tsx  # Reusable animated wrapper
│   ├── Contact.tsx          # Contact form and info
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero/landing section
│   └── Projects.tsx         # Projects showcase
├── utils/
│   └── animations.ts        # Framer Motion variants
└── styles/
    └── components.css       # Component-specific styles
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms
The built files in the `.next` folder can be deployed to any static hosting service.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Animation Features

- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth page transitions
- Loading states
- Interactive elements

## 🎯 Performance

- Optimized images and fonts
- Code splitting with Next.js
- Lazy loading components
- Minimal bundle size

## 📞 Support

If you need help customizing your portfolio:
1. Check the component files for inline comments
2. Review the Tailwind CSS documentation
3. Consult Framer Motion docs for animation customization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🎉

## Features

- **Responsive Design**: The portfolio is designed to be fully responsive, ensuring a great experience on both desktop and mobile devices.
- **Animated Sections**: Various sections of the portfolio include animations to engage users and provide a dynamic feel.
- **Modular Components**: The application is built using reusable components, making it easy to maintain and extend.
- **Contact Form**: A dedicated contact section allows potential clients or employers to reach out easily.

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd portfolio-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000` to see your portfolio in action.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A superset of JavaScript that adds static types.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.