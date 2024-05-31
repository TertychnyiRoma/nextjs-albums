import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});
