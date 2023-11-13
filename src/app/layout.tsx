import '@styles/global.scss';

import { ReduxProvider } from '@components/ReduxProvider';
import { Inter } from 'next/font/google';

import styles from './app.module.scss';

const inter = Inter({ subsets: ['latin'] });
const { app } = styles;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <html lang='en'>
        <body className={`${inter.className} app`}>
          <div className={app}>{children}</div>
        </body>
      </html>
    </ReduxProvider>
  );
}
