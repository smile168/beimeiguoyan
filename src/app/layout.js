import { Inter } from 'next/font/google';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
const inter = Inter({ subsets: ['latin'] });
import './global.css';

export const metadata = {
  title: 'Beimeiguoyan',
  description: '国烟，北美全美两天到',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
