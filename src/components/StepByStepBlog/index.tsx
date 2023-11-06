import { MainContent } from '@components/MainContent';
import preview from '@public/images/blogPage/preview.jpg';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './sbsb.module.scss';
import { IStepByStepBlogProps } from './types';

const { wrapper, container, content, titleClass, imageContainer, image } = styles;

export const StepByStepBlogComponent: FC<IStepByStepBlogProps> = ({ data }) => {
  const classNames = {
    titleClassName: titleClass,
  };

  const { author, date } = data;

  return (
    <section className={wrapper} data-testid='step-by-step-blog-component'>
      <div className={container}>
        <MainContent
          {...data}
          credentials={{ author, date }}
          className={content}
          classNames={classNames}
          buttonTestID='sbsb-button'
        />
        <div className={imageContainer}>
          <Image className={image} src={preview} alt='preview' priority />
        </div>
      </div>
    </section>
  );
};

export const StepByStepBlog = memo(StepByStepBlogComponent);
