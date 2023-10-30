import { Credentials } from '@ui/Credentials';
import { Sen } from 'next/font/google';
import { FC, memo } from 'react';

import styles from './preview.module.scss';
import { IPreviewProps } from './types';

const sen = Sen({ subsets: ['latin'] });
const { wrapper, labelClass, headerClass, bodyClass, titleClass } = styles;

const PreviewComponent: FC<IPreviewProps> = ({
  label,
  labelMarked,
  header,
  title,
  body,
  credentials,
  colored,
  classNames = {},
}) => {
  const { wrapperClassName, titleClassName, bodyClassName } = classNames;

  return (
    <article className={`${wrapper} ${wrapperClassName}`}>
      {label && (
        <p className={labelClass}>
          {label} <span>{labelMarked}</span>
        </p>
      )}
      {header && <h1 className={`${headerClass} ${sen.className}`}>{header}</h1>}
      {title && <h2 className={`${titleClass} ${sen.className} ${titleClassName}`}>{title}</h2>}
      {credentials && <Credentials {...credentials} colored={colored} />}
      {body && <p className={`${bodyClass} ${bodyClassName}`}>{body}</p>}
    </article>
  );
};

export const Preview = memo(PreviewComponent);
