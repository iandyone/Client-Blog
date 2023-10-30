import { FC } from 'react';

import styles from './loader.module.scss';

const { spinner } = styles;

export const Spinner: FC = () => {
  return <div className={spinner} />;
};
