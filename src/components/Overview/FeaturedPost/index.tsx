import { Pages } from '@appTypes/enums';
import { Button } from '@ui/Button';
import { Post } from '@ui/Post';
import { Title } from '@ui/Title';
import Link from 'next/link';
import { FC, memo } from 'react';

import { data } from './data';
import styles from './fp.module.scss';
import { IFeaturedPostProps } from './types';

const { wrapper, body, title, button } = styles;
const { buttonText, titleText } = data;

const FeaturedPostComponent: FC<IFeaturedPostProps> = ({ post }) => {
  return (
    <article className={wrapper}>
      <Title className={title}>{titleText}</Title>
      <div className={body}>
        <Post post={post} />
        <Link href={Pages.POST}>
          <Button className={button}>{buttonText}</Button>
        </Link>
      </div>
    </article>
  );
};

export const FeaturedPost = memo(FeaturedPostComponent);
