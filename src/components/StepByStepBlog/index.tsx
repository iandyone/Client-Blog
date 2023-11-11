import { MainContent } from '@components/MainContent';
import { imagePlaceholder } from '@constants/animations';
import preview from '@public/images/blogPage/preview.jpg';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './sbsb.module.scss';
import { IStepByStepBlogProps } from './types';

export const StepByStepBlogComponent: FC<IStepByStepBlogProps> = ({ data }) => {
  const classNames = {
    titleClassName: styles.titleClass,
  };

  const { author, date } = data;

  return (
    <section className={styles.wrapper} data-testid='step-by-step-blog-component'>
      <div className={styles.container}>
        <MainContent
          {...data}
          credentials={{ author, date }}
          className={styles.content}
          classNames={classNames}
          buttonTestID='sbsb-button'
        />
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={preview}
            alt='preview'
            placeholder={`data:image/${imagePlaceholder}`}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export const StepByStepBlog = memo(StepByStepBlogComponent);
