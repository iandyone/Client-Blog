import { FC, memo, useMemo } from 'react';

import styles from './credentials.module.scss';
import { ICredentialsProps } from './types.';

const CredentialsComponent: FC<ICredentialsProps> = ({ author, date, colored }) => {
  const credentialsClassName = useMemo(
    () => (colored ? `${styles.credentials} ${styles.styled}` : styles.credentials),
    [colored],
  );
  const name = typeof author === 'string' ? author : author.name;

  return (
    <p className={credentialsClassName}>
      By <span>{name}</span> | {date}
    </p>
  );
};

export const Credentials = memo(CredentialsComponent);
