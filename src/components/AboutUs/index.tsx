import { IPreviewCLasses } from '@appTypes';
import { MainContent } from '@components/MainContent';
import bannerImage from '@public/images/aboutPage/banner.jpg';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo, useMemo } from 'react';

import styles from './au.module.scss';
import { IAboutUsProps } from './types';

const {
  wrapper,
  container,
  headerClass,
  headerText,
  previewWrapper,
  headerTitle,
  bannerClass,
  bannerImageClass,
  achievesContainer,
  achievesItem,
  contentClass,
  contentTitle,
  contentText,
  contentWrapper,
} = styles;

const headerPeviewClasses: IPreviewCLasses = {
  titleClassName: headerTitle,
  wrapperClassName: previewWrapper,
};

const contentPeviewClasses: IPreviewCLasses = {
  titleClassName: contentTitle,
  bodyClassName: contentText,
  wrapperClassName: contentWrapper,
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
    <section className={wrapper}>
      <div className={container}>
        <article className={headerClass}>
          <MainContent label={label} title={header} classNames={headerPeviewClasses} />
          <div className={headerText}>{description}</div>
        </article>
        <article className={bannerClass}>
          <Image className={bannerImageClass} src={bannerImage} alt='banner' />
          <ul className={achievesContainer}>
            {achivesList &&
              achivesList.map(({ id, counter, text }) => (
                <li className={achievesItem} key={id}>
                  <Title>{counter}</Title>
                  {text}
                </li>
              ))}
          </ul>
        </article>
        <article className={contentClass}>
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
