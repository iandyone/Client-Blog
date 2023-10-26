'use client';

import '@styles/global.scss';

import ErrorBoundary from '@components/ErrorBoundary';
import { ReduxProvider } from '@components/ReduxProvider';
import { Inter } from 'next/font/google';

import styles from './app.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.app}>
          <main>
            <ErrorBoundary>
              <ReduxProvider>{children}</ReduxProvider>
            </ErrorBoundary>
          </main>
        </div>
      </body>
    </html>
  );
}
