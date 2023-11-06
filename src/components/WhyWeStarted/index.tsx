import { Routes } from '@appTypes/enums';
import bgImage from '@public/images/homePage/peoples.jpg';
import { Button } from '@ui/Button';
import { Preview } from '@ui/Preview';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, FC } from 'react';

import { IWhyWeStartedProps } from './types';
import styles from './wws.module.scss';

const { wrapper, container, body, title, button, image } = styles;

const classNames = {
  titleClassName: title,
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
    <section className={wrapper} data-testid='why-we-started-component'>
      <div className={container}>
        <Image src={bgImage} alt={'why we started image'} style={imageStyles} className={image} />
        <div className={body}>
          <Preview label={labelText} title={titleText} body={bodyText} classNames={classNames} />
          <Link href={Routes.ABOUT}>
            <Button className={button} testID='why-we-started-button'>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
