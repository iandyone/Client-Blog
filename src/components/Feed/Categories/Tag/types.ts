import { Tags } from '@appTypes/enums';
import { handlerTags } from '@appTypes/types';

export interface ITagProps {
  tag: Tags;
  onClick: handlerTags;
}
