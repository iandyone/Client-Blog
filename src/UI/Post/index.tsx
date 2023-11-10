import { imagePlaceholder } from '@constants/animations';
import { Credentials } from '@ui';
import { Sen } from 'next/font/google';
import Image from 'next/image';
import { CSSProperties, FC, memo } from 'react';

import styles from './post.module.scss';
import { IPostProps } from './types';

const imageStyles: CSSProperties = { objectFit: 'cover', height: 'auto' };
const fontSen = Sen({ subsets: ['latin'] });

const PostComponent: FC<IPostProps> = (props) => {
  const { post, wrapperClassName, media = true, body = true } = props;
  const { preview, author, date, title, content } = post;

  return (
    <article className={`${styles.wrapper} ${wrapperClassName}`}>
      {media && (
        <Image
          className={styles.image}
          alt='post preview'
          src={preview}
          style={imageStyles}
          placeholder={`data:image/${imagePlaceholder}`}
        />
      )}
      {date && author && <Credentials author={author} date={date} />}
      <h3 className={`${styles.head} ${fontSen.className}`}>{title}</h3>
      {body && <p className={styles.text}>{content}</p>}
    </article>
  );
};

export const Post = memo(PostComponent);
