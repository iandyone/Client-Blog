import { digest } from '@constants/data';
import { Digest } from '@ui/Digest';
import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './rn.module.scss';
import { IReadNextProps } from './types';

const { wrapper, container, digestClass } = styles;

const ReadNextComponent: FC<IReadNextProps> = ({ data }) => {
  const { title } = data;
  const digestList = digest.slice(0, 3);

  return (
    <section className={wrapper}>
      <div className={container}>
        <Title>{title}</Title>
        <Digest containerClass={digestClass} digests={digestList} column />
      </div>
    </section>
  );
};

export const ReadNext = memo(ReadNextComponent);
