import { IDigest } from '@appTypes';

export interface IDigestProps {
  containerClass?: string;
  digests: IDigest[];
  controls?: boolean;
  column?: boolean;
  data?: {
    prev: string;
    next: string;
  };
}
