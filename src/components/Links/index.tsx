import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './links.module.scss';
import { ILinksComponentProps } from './types';

export const LinksComponent: FC<ILinksComponentProps> = ({ links, className }) => {
  return (
    <ul className={`${styles.wrapper} ${className}`}>
      {links.map(({ icon, alt }) => (
        <Image className={styles.media} key={alt} alt={alt} src={icon} />
      ))}
    </ul>
  );
};

export const Links = memo(LinksComponent);
