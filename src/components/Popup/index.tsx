'use client';

import Portal from '@components/Portal';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import XMarkIcon from '@public/images/icons/xMark.svg';
import { setPopup } from '@reducers/app';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './popup.module.scss';
import { IModalProps } from './types';

const PopupComponent: FC<IModalProps> = ({ children }) => {
  const dispatch = useDispatchTyped();
  const { popup } = useSelectorTyped((store) => store.app);

  function handlerOnClickButton() {
    dispatch(setPopup(false));
  }

  return (
    <Portal id='video'>
      <div className={`${styles.popupClass} ${popup && styles.active}`} data-testid='modal-media'>
        <div className={`${styles.content} ${popup && styles.active}`}>
          <div className={styles.button} onClick={handlerOnClickButton}>
            <Image
              className={styles.icon}
              src={XMarkIcon}
              alt='close button'
              data-testid='popup-close-button'
            />
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export const Popup = memo(PopupComponent);
