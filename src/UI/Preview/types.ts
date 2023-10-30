import { ICredentials } from '@appTypes';

export interface IPreviewProps {
  label?: string;
  labelMarked?: string;
  header?: string;
  title?: string;
  body?: string;
  credentials?: ICredentials;
  colored?: boolean;
  classNames?: {
    wrapperClassName?: string;
    titleClassName?: string;
    bodyClassName?: string;
  };
}
