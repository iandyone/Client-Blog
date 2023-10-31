import { IDigest } from '@appTypes';

export interface IDigestProps {
  containerClass?: string;
  digests: IDigest[];
  controls?: boolean;
  data: {
    prev: string;
    next: string;
  };
}
