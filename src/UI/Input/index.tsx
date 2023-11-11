import { handlerChangeInput, handlerChangeTextatea } from '@appTypes/types';
import { FC, memo, useMemo } from 'react';

import styles from './input.module.scss';
import { IInputProps } from './types';

export const InputComponent: FC<IInputProps> = (props) => {
  const {
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
  } = props;
  const labelClassName = useMemo(() => {
    if (labelSuccess) return `${styles.labelClass} ${styles.success}`;
    if (labelError) return `${styles.labelClass} ${styles.rejected}`;
    return styles.labelClass;
  }, [labelError, labelSuccess]);

  const inputClassName = useMemo(() => {
    if (labelSuccess) return `${styles.inputClass} ${styles.success}`;
    if (labelError) return `${styles.inputClass} ${styles.rejected}`;
    return styles.inputClass;
  }, [labelSuccess, labelError]);

  return (
    <>
      <div className={styles.container}>
        <label htmlFor={name} className={labelClassName}>
          {labelSuccess ?? labelError}
        </label>
        {!textarea && (
          <input
            name={name}
            id={name}
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
            id={name}
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
