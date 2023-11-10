import { Routes } from '@appTypes/enums';
import { imagePlaceholder } from '@constants/animations';
import bgImage from '@public/images/homePage/peoples.jpg';
import { Button, Preview } from '@ui';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, FC } from 'react';

import { IWhyWeStartedProps } from './types';
import styles from './wws.module.scss';

const classNames = {
  titleClassName: styles.title,
};

const imageStyles: CSSProperties = {
  objectFit: 'cover',
  height: 'auto',
  width: '100%',
  maxWidth: '950px',
};

export const WhyWeStarted: FC<IWhyWeStartedProps> = ({ data }) => {
  const { bodyText, buttonText, labelText, titleText } = data;

  return (
    <section className={styles.wrapper} data-testid='why-we-started-component'>
      <div className={styles.container}>
        <Image
          src={bgImage}
          alt={'why we started image'}
          style={imageStyles}
          className={styles.image}
          placeholder={`data:image/${imagePlaceholder}`}
        />
        <div className={styles.body}>
          <Preview label={labelText} title={titleText} body={bodyText} classNames={classNames} />
          <Link href={Routes.ABOUT}>
            <Button className={styles.button} testID='why-we-started-button'>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
