import { Category } from '@appTypes/enums';
import { ReadNext } from '@components/BlogPost/ReadNext';
import { imagePlaceholder } from '@constants/animations';
import { defaultDigest, testimonials } from '@constants/data';
import poster from '@public/images/blogPostPage/poster.jpg';
import startupIcon from '@public/images/homePage/startup.svg';
import { Title, User } from '@ui';
import { Sen } from 'next/font/google';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './bp.module.scss';
import { IBlogPostProps } from './types';

const fontSen = Sen({ subsets: ['latin'] });

const BlogPostComponent: FC<IBlogPostProps> = ({ data, digest }) => {
  const { user, date, header, title, content, label, list, readNext } = data;
  const { item1, item2, item3 } = list;
  const { avatar } = testimonials[0];

  const currentDigest = digest ?? defaultDigest;
  const { author, title: postTitle, label: postLabel, labelIcon, preview } = currentDigest;
  const { name, avatar: postAvatar } = author;

  return (
    <>
      <section className={styles.wrapper} data-testid='blog-post-component'>
        <div className={styles.container}>
          <div className={styles.contenContainer}>
            <User
              user={{ avatar: postAvatar ?? avatar, location: date, name: name ?? user }}
              iconClassName={styles.avatarClass}
            />
            <Title className={styles.headerClass}>{postTitle ?? header}</Title>
            <div className={styles.labelClass}>
              <Image src={labelIcon ?? startupIcon} alt='startup' />
              <Title className={styles.labelTitle} testID='blog-post-label'>
                {postLabel ?? label}
              </Title>
            </div>
          </div>
          <Image
            className={styles.posterClass}
            src={preview ?? poster}
            alt='poster'
            placeholder={`data:image/${imagePlaceholder}`}
            priority
          />
          <div className={`${styles.contenContainer} ${styles.postContainer}`}>
            <Title className={styles.titleClass}>{title}</Title>
            <p className={styles.contentClass}>{content}</p>
          </div>
          <div className={`${styles.contenContainer} ${styles.postContainer}`}>
            <Title className={styles.titleClass}>{title}</Title>
            <p className={styles.contentClass}>{content}</p>
            <p className={styles.contentClass}>{content}</p>
            <div className={styles.listContainer}>
              <h4 className={`${styles.listItem} ${fontSen.className}`}>{item1}</h4>
              <h4 className={`${styles.listItem} ${fontSen.className}`}>{item2}</h4>
              <h4 className={`${styles.listItem} ${fontSen.className}`}>{item3}</h4>
            </div>
            <p className={styles.contentClass}>{content}</p>
          </div>
          <div className={`${styles.contenContainer} ${styles.postContainer}`}>
            <Title className={styles.titleClass}>{title}</Title>
            <p className={styles.contentClass}>{content}</p>
          </div>
        </div>
      </section>
      <ReadNext data={readNext} category={postLabel ?? (label as Category)} />
    </>
  );
};

export const BlogPost = memo(BlogPostComponent);
