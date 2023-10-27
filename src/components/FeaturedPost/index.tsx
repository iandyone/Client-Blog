import { Button } from '@ui/Button';
import { Credentials } from '@ui/Credentials';
import { Sen } from 'next/font/google';
import Image from 'next/image';
import { FC, memo } from 'react';

import { data } from './data';
import styles from './fp.module.scss';
import { IFeaturedPostProps } from './types';

const sen = Sen({ subsets: ['latin'] });
const { wrapper, container, body, image, header, head, text, button } = styles;
const { buttonText, titleText } = data;

const FeaturedPostComponent: FC<IFeaturedPostProps> = ({ post }) => {
  const { preview, author, date, title, content } = post;

  return (
    <div className={wrapper}>
      <div className={container}>
        <h2 className={`${header} ${sen.className}`}>{titleText}</h2>
        <div className={body}>
          <Image className={image} alt='post preview' src={preview} />
          <Credentials author={author} date={date} />
          <h3 className={`${head} ${sen.className}`}>{title}</h3>
          <p className={text}>{content}</p>
          <Button className={button}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export const FeaturedPost = memo(FeaturedPostComponent);
