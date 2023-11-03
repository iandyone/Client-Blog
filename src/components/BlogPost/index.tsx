import { mockDigest, testimonials } from '@constants/data';
import poster from '@public/images/blogPostPage/poster.jpg';
import startupIcon from '@public/images/homePage/startup.svg';
import { Title } from '@ui/Title';
import { User } from '@ui/User';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './bp.module.scss';
import { IBlogPostProps } from './types';

const {
  wrapper,
  container,
  contenContainer,
  headerClass,
  labelClass,
  labelTitle,
  posterClass,
  titleClass,
  postContainer,
  contentClass,
  listContainer,
  listItem,
} = styles;

const BlogPostComponent: FC<IBlogPostProps> = ({ data, digest }) => {
  const { user, date, header, title, content, label, list } = data;
  const { item1, item2, item3 } = list;
  const { avatar } = testimonials[0];

  const currentDigest = digest ?? mockDigest;
  const { author, title: postTitle, label: postLabel, labelIcon, preview } = currentDigest;
  const { name, avatar: postAvatar } = author;

  return (
    <section className={wrapper}>
      <div className={container}>
        <div className={contenContainer}>
          <User name={name ?? user} avatar={postAvatar ?? avatar} location={date} />
          <Title className={headerClass}>{postTitle ?? header}</Title>
          <div className={labelClass}>
            <Image src={labelIcon ?? startupIcon} alt='startup'></Image>
            <Title className={labelTitle}>{postLabel ?? label}</Title>
          </div>
        </div>
        <Image className={posterClass} src={preview ?? poster} alt='poster' priority />
        <div className={`${contenContainer} ${postContainer}`}>
          <Title className={titleClass}>{title}</Title>
          <p className={contentClass}>{content}</p>
        </div>
        <div className={`${contenContainer} ${postContainer}`}>
          <Title className={titleClass}>{title}</Title>
          <p className={contentClass}>{content}</p>
          <p className={contentClass}>{content}</p>
          <div className={listContainer}>
            <Title className={listItem}>{item1}</Title>
            <Title className={listItem}>{item2}</Title>
            <Title className={listItem}>{item3}</Title>
          </div>
          <p className={contentClass}>{content}</p>
        </div>
        <div className={`${contenContainer} ${postContainer}`}>
          <Title className={titleClass}>{title}</Title>
          <p className={contentClass}>{content}</p>
        </div>
      </div>
    </section>
  );
};

export const BlogPost = memo(BlogPostComponent);
