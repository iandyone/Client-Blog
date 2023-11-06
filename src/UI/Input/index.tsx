import { handlerChangeInput, handlerChangeTextatea } from '@appTypes/types';
import { FC, memo, useMemo } from 'react';

import styles from './input.module.scss';
import { IInputProps } from './types';

const { container, labelClass, inputClass, success, rejected } = styles;

export const InputComponent: FC<IInputProps> = ({
  value,
  handlerChange,
  handlerBlur,
  placeholder,
  labelError,
  labelSuccess,
  className,
  requred,
  name,
  type,
  textarea,
  testID,
}) => {
  const labelClassName = useMemo(() => {
    if (labelSuccess) return `${labelClass} ${success}`;
    if (labelError) return `${labelClass} ${rejected}`;
    return labelClass;
  }, [labelError, labelSuccess]);

  const inputClassName = useMemo(() => {
    if (labelSuccess) return `${inputClass} ${success}`;
    if (labelError) return `${inputClass} ${rejected}`;
    return inputClass;
  }, [labelSuccess, labelError]);

  return (
    <>
      <div className={container}>
        <label htmlFor={name} className={labelClassName}>
          {labelSuccess ?? labelError}
        </label>
        {!textarea && (
          <input
            name={name}
            type={type}
            value={value}
            onChange={handlerChange as handlerChangeInput}
            onBlur={handlerBlur}
            placeholder={placeholder}
            className={`${className} ${inputClassName}`}
            required={requred}
            data-testid={testID}
          />
        )}
        {textarea && (
          <textarea
            name={name}
            value={value}
            onChange={handlerChange as handlerChangeTextatea}
            onBlur={handlerBlur}
            placeholder={placeholder}
            className={`${className} ${inputClassName}`}
            required={requred}
            data-testid={testID}
          />
        )}
      </div>
    </>
  );
};

export const Input = memo(InputComponent);
