import { FC, memo, useMemo } from 'react';

import styles from './input.module.scss';
import { IInputProps } from './types';

const { container, labelClass, inputClass, success, rejected } = styles;

export const InputComponent: FC<IInputProps> = ({
  value,
  handlerChange,
  placeholder,
  labelError,
  labelSuccess,
  className,
  name,
  type,
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
        {(labelError || labelError) && (
          <label htmlFor={name} className={labelClassName}>
            {labelSuccess ?? labelError}
          </label>
        )}
        <input
          name={name}
          type={type}
          value={value}
          onChange={handlerChange}
          placeholder={placeholder}
          className={`${className} ${inputClassName}`}
        />
      </div>
    </>
  );
};

export const Input = memo(InputComponent);
