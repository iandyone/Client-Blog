import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './links.module.scss';
import { ILinksComponentProps } from './types';

const { wrapper, media } = styles;

export const LinksComponent: FC<ILinksComponentProps> = ({ links, className }) => {
  return (
    <ul className={`${wrapper} ${className}`}>
      {links.map(({ icon, alt }) => (
        <Image className={media} key={alt} alt={alt} src={icon} />
      ))}
    </ul>
  );
};

export const Links = memo(LinksComponent);
