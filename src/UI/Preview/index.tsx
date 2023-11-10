import { IPreview } from '@appTypes';
import { Credentials } from '@ui/Credentials';
import { Sen } from 'next/font/google';
import { FC, memo } from 'react';

import styles from './preview.module.scss';

const fontSen = Sen({ subsets: ['latin'] });
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
  const { wrapperClassName, titleClassName, bodyClassName, labelClassName } = classNames;

  return (
    <article className={`${wrapperClassName} ${wrapper} `} data-testid='preview-component'>
      {label && (
        <p className={`${labelClassName} ${labelClass}`} data-testid='preview-label'>
          {label}
          {labelMarked && <span> {labelMarked}</span>}
        </p>
      )}
      {header && <h1 className={`${titleClassName} ${headerClass} ${fontSen.className}`}>{header}</h1>}
      {title && <h2 className={`${titleClassName} ${titleClass} ${fontSen.className} `}>{title}</h2>}
      {credentials && <Credentials {...credentials} colored={colored} />}
      {body && <p className={`${bodyClassName} ${bodyClass} `}>{body}</p>}
    </article>
  );
};

export const Preview = memo(PreviewComponent);
