import '@styles/global.scss';

import { ReduxProvider } from '@components/ReduxProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
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
        <GoogleAnalytics gaId='G-D1Q0QJH5W3' />
      </html>
    </ReduxProvider>
  );
}
