import { testimonials } from '@constants/data';
import { Carousel } from '@ui/Carousel';
import { Preview } from '@ui/Preview';
import { FC, memo } from 'react';

import { Card } from './Card';
import styles from './testimonials.module.scss';
import { ITestimonialsProps } from './types';

const TestimonialsComponent: FC<ITestimonialsProps> = ({ data }) => {
  const { body, label, titie } = data;
  const previewClassNames = {
    wrapperClassName: styles.previewWrapper,
    titleClassName: styles.previewTitle,
    bodyClassName: styles.previewBody,
  };
  const testimonialsList = testimonials.slice(0, 3);

  return (
    <section className={styles.wrapper} data-testid='testimonals-component'>
      <div className={styles.container}>
        <article className={styles.testimonialsClass}>
          <Preview label={label} title={titie} body={body} classNames={previewClassNames} />
        </article>
        <article className={styles.slider}>
          <Carousel className={styles.carousel}>
            {testimonialsList.map((testimonial) => (
              <Card {...testimonial} key={testimonial.id} />
            ))}
          </Carousel>
        </article>
      </div>
    </section>
  );
};

export const Testimonials = memo(TestimonialsComponent);
