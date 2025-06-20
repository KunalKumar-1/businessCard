import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tropical Spice Exporters',
  description: 'Premium quality spices and tropical products exporter since 1985. Contact us for wholesale spice orders and distribution partnerships.',
  keywords: 'spice exporters, tropical products, wholesale spices, organic spices, spice distribution, food exporters',
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