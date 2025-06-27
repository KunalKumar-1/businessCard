import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dadore Interiors',
  description: 'Dadore Interiors has been providing quality residential interior design services since 2017. Our team of talented designers is dedicated to crafting personalized interior designs that meet each clients unique style and preferences. Let us bring your dream home to life.',
  keywords: 'PEBBLE BAY, SOBHA PALM COURT, PRETIGE LEELA RESIDENCY',
  authors: [{ name: 'Kunal Kumar' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}