import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Portfolio of a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'developer, portfolio, react, nextjs, typescript, web development',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Your Name - Full Stack Developer',
    description: 'Portfolio of a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
    url: 'https://yourportfolio.com',
    siteName: 'Your Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer',
    description: 'Portfolio of a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@yourusername',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://yourportfolio.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}