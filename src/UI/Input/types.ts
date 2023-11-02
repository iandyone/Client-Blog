import { handler, handlerChange } from '@appTypes/types';

export interface IInputProps {
  value: string;
  placeholder: string;
  labelSuccess?: string;
  labelError: string;
  name: string;
  handlerChange: handlerChange;
  handlerBlur?: handler;
  type?: 'email' | 'text';
  className?: string;
  requred?: boolean;
  textarea?: boolean;
}
