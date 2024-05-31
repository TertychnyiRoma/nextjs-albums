import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import '@/styles/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Albums App',
};

type Props = Readonly<{ children: ReactNode }>;

const RootLayout = ({ children }: Props) => (
  <html lang='en'>
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
