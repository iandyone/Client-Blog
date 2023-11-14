import { Routes } from '@appTypes/enums';
import { Button, Post, Title } from '@ui';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './fp.module.scss';
import { IFeaturedPostProps } from './types';

const FeaturedPostComponent: FC<IFeaturedPostProps> = ({ post, buttonText, titleText }) => {
  return (
    <article className={styles.wrapper}>
      <Title className={styles.title}>{titleText}</Title>
      <div className={styles.body}>
        <Post post={post} />
        <Link href={Routes.POST}>
          <Button className={styles.button} testID='feature-post-button'>
            {buttonText}
          </Button>
        </Link>
      </div>
    </article>
  );
};

export const FeaturedPost = memo(FeaturedPostComponent);
