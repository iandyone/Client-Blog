import { Navigation } from '@components/Navigation';
import { FC, memo } from 'react';

import styles from './footerNav.module.scss';
import { IFooterNavProps } from './types';

const FooterNavComponent: FC<IFooterNavProps> = ({ navigation }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation data={navigation} />
    </div>
  );
};

export const FooterNav = memo(FooterNavComponent);
