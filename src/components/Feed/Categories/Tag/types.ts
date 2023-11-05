import { Tags } from '@appTypes/enums';

export interface ITagProps {
  tag: Tags;
  onClick: (tag: Tags) => void;
}
