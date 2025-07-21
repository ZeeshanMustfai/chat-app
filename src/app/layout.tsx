import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { StoreProvider } from '../zustand/store-provider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Chat App`,
  description: `A simple chat application built with Next.js and Ant Design.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        data-new-gr-c-s-check-loaded="14.1244.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        <StoreProvider isAuthenticated={false} accessToken="" user={null}>
          {children}
          <ToastContainer position="top-center" />
        </StoreProvider>
      </body>
    </html>
  );
}
