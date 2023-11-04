import { FC, memo, useMemo } from 'react';

import styles from './credentials.module.scss';
import { ICredentialsProps } from './types.';

const { credentials, styled } = styles;

const CredentialsComponent: FC<ICredentialsProps> = ({ author, date, colored }) => {
  const credentialsClassName = useMemo(() => (colored ? `${credentials} ${styled}` : credentials), [colored]);
  const name = typeof author === 'string' ? author : author.name;

  return (
    <p className={credentialsClassName}>
      By <span>{name}</span> | {date}
    </p>
  );
};

export const Credentials = memo(CredentialsComponent);
