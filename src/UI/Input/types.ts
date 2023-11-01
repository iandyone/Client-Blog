import { handlerChange } from '@appTypes/types';

export interface IInputProps {
  value: string;
  placeholder: string;
  labelSuccess?: string;
  labelError: string;
  name: string;
  handlerChange: handlerChange;
  type: 'email' | 'text';
  className?: string;
}
