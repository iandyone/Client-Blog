import { Routes } from '@appTypes/enums';
import { Button, Preview } from '@ui';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './mc.module.scss';
import { IMainContantProps } from './types';

const MainContentComponent: FC<IMainContantProps> = (props) => {
  const {
    buttonText,
    body,
    classNames,
    credentials,
    label,
    labelMarked,
    title,
    className,
    colored,
    header,
    buttonTestID,
  } = props;

  return (
    <div className={`${className && className} ${styles.wrapper}`}>
      <Preview
        body={body}
        header={header}
        title={title}
        label={label}
        labelMarked={labelMarked}
        credentials={credentials}
        classNames={classNames}
        colored={colored}
      />
      {buttonText && (
        <Link href={Routes.POST}>
          <Button testID={buttonTestID}>{buttonText}</Button>
        </Link>
      )}
    </div>
  );
};

export const MainContent = memo(MainContentComponent);
