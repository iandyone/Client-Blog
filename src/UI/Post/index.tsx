import { Credentials } from '@ui/Credentials';
import { Sen } from 'next/font/google';
import Image from 'next/image';
import { CSSProperties, FC, memo } from 'react';

import styles from './post.module.scss';
import { IPostProps } from './types';

const { wrapper, head, text, image } = styles;
const sen = Sen({ subsets: ['latin'] });

const PostComponent: FC<IPostProps> = ({ post, wrapperClassName, media = true, body = true }) => {
  const { preview, author, date, title, content } = post;
  const imageStyles: CSSProperties = { objectFit: 'cover', height: 'auto' };

  return (
    <article className={`${wrapper} ${wrapperClassName}`}>
      {media && <Image className={image} alt='post preview' src={preview} style={imageStyles} />}
      <Credentials author={author} date={date} />
      <h3 className={`${head} ${sen.className}`}>{title}</h3>
      {body && <p className={text}>{content}</p>}
    </article>
  );
};

export const Post = memo(PostComponent);
