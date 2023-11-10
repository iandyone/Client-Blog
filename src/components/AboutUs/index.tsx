import { IPreviewClasses } from '@appTypes';
import { MainContent } from '@components/MainContent';
import { imagePlaceholder } from '@constants/animations';
import bannerImage from '@public/images/aboutPage/banner.jpg';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo, useMemo } from 'react';

import styles from './au.module.scss';
import { IAboutUsProps } from './types';

const headerPeviewClasses: IPreviewClasses = {
  titleClassName: styles.headerTitle,
  wrapperClassName: styles.previewWrapper,
};

const contentPeviewClasses: IPreviewClasses = {
  titleClassName: styles.contentTitle,
  bodyClassName: styles.contentText,
  wrapperClassName: styles.contentWrapper,
};

const AboutUsComponent: FC<IAboutUsProps> = ({ data }) => {
  const { banner, content, description, header, label } = data;
  const { blogsCounter, blogsText, usersCounter, usersText, viewsCounter, viewsText } = banner;
  const { label1, label2, text1, text2, title1, title2 } = content;

  const achivesList = useMemo(
    () => [
      { id: 1, counter: blogsCounter, text: blogsText },
      { id: 2, counter: viewsCounter, text: viewsText },
      { id: 3, counter: usersCounter, text: usersText },
    ],
    [blogsCounter, viewsCounter, usersCounter, blogsText, viewsText, usersText],
  );

  const contentList = useMemo(
    () => [
      { id: 1, label: label1, body: text1, title: title1 },
      { id: 2, label: label2, body: text2, title: title2 },
    ],
    [label1, text1, title1, label2, text2, title2],
  );

  return (
    <section className={styles.wrapper} data-testid='about-us-component'>
      <div className={styles.container}>
        <article className={styles.headerClass}>
          <MainContent label={label} title={header} classNames={headerPeviewClasses} />
          <div className={styles.headerText}>{description}</div>
        </article>
        <article className={styles.bannerClass}>
          <Image
            className={styles.bannerImageClass}
            src={bannerImage}
            alt='banner'
            placeholder={`data:image/${imagePlaceholder}`}
            priority
          />
          <ul className={styles.achievesContainer}>
            {achivesList &&
              achivesList.map(({ id, counter, text }) => (
                <li className={styles.achievesItem} key={id}>
                  <Title>{counter}</Title>
                  {text}
                </li>
              ))}
          </ul>
        </article>
        <article className={styles.contentClass}>
          {contentList &&
            contentList.map((content) => (
              <MainContent key={content.id} {...content} classNames={contentPeviewClasses} />
            ))}
        </article>
      </div>
    </section>
  );
};

export const AboutUs = memo(AboutUsComponent);
