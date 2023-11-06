import { Routes } from '@appTypes/enums';
import { Button } from '@ui/Button';
import { Preview } from '@ui/Preview';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './mc.module.scss';
import { IMainContantProps } from './types';

const { wrapper } = styles;

const MainContentComponent: FC<IMainContantProps> = ({
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
}) => {
  return (
    <div className={`${className} ${wrapper}`}>
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
