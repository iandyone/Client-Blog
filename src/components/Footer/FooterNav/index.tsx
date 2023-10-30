import { Navigation } from '@components/Navigation';
import { FC } from 'react';

import styles from './footerNav.module.scss';

export const FooterNav: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
    </div>
  );
};
