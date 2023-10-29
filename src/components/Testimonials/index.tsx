import { testimonials } from '@constants/data';
import { Carousel } from '@ui/Carousel';
import { Preview } from '@ui/Preview';
import { FC } from 'react';

import { Card } from './Card';
import { data } from './data';
import styles from './testimonials.module.scss';

const { wrapper, container, testimonialsClass, previewWrapper, previewTitle, previewBody, slider, carousel } =
  styles;

const { body, label, titie } = data;

export const Testimonials: FC = () => {
  const previewClassNames = {
    wrapperClassName: previewWrapper,
    titleClassName: previewTitle,
    bodyClassName: previewBody,
  };

  return (
    <section className={wrapper}>
      <div className={container}>
        <article className={testimonialsClass}>
          <Preview label={label} title={titie} body={body} classNames={previewClassNames} />
        </article>
        <article className={slider}>
          <Carousel className={carousel}>
            <Card {...testimonials[0]} />
            <Card {...testimonials[0]} />
            <Card {...testimonials[0]} />
          </Carousel>
        </article>
      </div>
    </section>
  );
};
