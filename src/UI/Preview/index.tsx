import { IPreview } from '@appTypes';
import { Credentials } from '@ui/Credentials';
import { Sen } from 'next/font/google';
import { FC, memo } from 'react';

import styles from './preview.module.scss';

const sen = Sen({ subsets: ['latin'] });
const { wrapper, labelClass, headerClass, bodyClass, titleClass } = styles;

const PreviewComponent: FC<IPreview> = ({
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
    <article className={`${wrapperClassName} ${wrapper} `}>
      {label && (
        <p className={labelClass}>
          {label} <span>{labelMarked}</span>
        </p>
      )}
      {header && <h1 className={`${titleClassName} ${headerClass} ${sen.className}`}>{header}</h1>}
      {title && <h2 className={`${titleClassName} ${titleClass} ${sen.className} `}>{title}</h2>}
      {credentials && <Credentials {...credentials} colored={colored} />}
      {body && <p className={`${bodyClassName} ${bodyClass} `}>{body}</p>}
    </article>
  );
};

export const Preview = memo(PreviewComponent);
