import { Navigation } from '@components/Navigation';
import { FC, memo } from 'react';

import styles from './footerNav.module.scss';
import { IFooterNavProps } from './types';

const FooterNavComponent: FC<IFooterNavProps> = ({ navigation, lang }) => {
  return (
    <div className={styles.wrapper} data-testid='footer-navigation'>
      <Navigation data={navigation} lang={lang} />
    </div>
  );
};

export const FooterNav = memo(FooterNavComponent);
