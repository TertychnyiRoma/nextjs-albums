import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { inter } from './fonts';
import '@/styles/index.css';

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
