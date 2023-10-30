'use client';

import '@styles/global.scss';

import ErrorBoundary from '@components/ErrorBoundary';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { ReduxProvider } from '@components/ReduxProvider';
import { Inter } from 'next/font/google';

import styles from './app.module.scss';

const inter = Inter({ subsets: ['latin'] });
const { app, main } = styles;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ReduxProvider>
        <html lang='en'>
          <body className={inter.className}>
            <div className={app}>
              <Header />
              <main className={main}>{children}</main>
              <Footer />
            </div>
          </body>
        </html>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
