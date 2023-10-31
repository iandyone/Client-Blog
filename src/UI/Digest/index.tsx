import { Routes } from '@appTypes/enums';
import { MainContent } from '@components/MainContent';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './digest.module.scss';
import { IDigestProps } from './types';

const { digestClass, container, titleClass, content, image, imageContainer, labelClass } = styles;

const DigestConponent: FC<IDigestProps> = ({ digests }) => {
  const classNames = {
    titleClassName: titleClass,
    labelClassName: labelClass,
  };

  return (
    <ul className={container}>
      {digests.map(({ preview, body, label, title, id }) => (
        <Link className={digestClass} href={`${Routes.POST}/${id}`} key={title}>
          <div className={imageContainer}>
            <Image className={image} src={preview} alt={label} />
          </div>
          <div className={content}>
            <MainContent body={body} label={label} title={title} classNames={classNames} />
          </div>
        </Link>
      ))}
    </ul>
  );
};

export const Digest = memo(DigestConponent);
