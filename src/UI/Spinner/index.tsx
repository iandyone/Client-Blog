import { FC } from 'react';

import styles from './loader.module.scss';

export const Spinner: FC = () => {
  return <div className={styles.spinner} />;
};
