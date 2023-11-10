'use client';

import Portal from '@components/Portal';
import { imagePlaceholder } from '@constants/animations';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import XMarkIcon from '@public/images/icons/xMark.svg';
import { setPopup } from '@reducers/app';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './popup.module.scss';
import { IModalProps } from './types';

const { popupClass, content, button, icon, active } = styles;

const PopupComponent: FC<IModalProps> = ({ children }) => {
  const dispatch = useDispatchTyped();
  const { popup } = useSelectorTyped((store) => store.app);

  function handlerOnClickButton() {
    dispatch(setPopup(false));
  }

  return (
    <Portal id='video'>
      <div className={`${popupClass} ${popup && active}`} data-testid='modal-media'>
        <div className={`${content} ${popup && active}`}>
          <div className={button} onClick={handlerOnClickButton}>
            <Image
              className={icon}
              src={XMarkIcon}
              alt='close button'
              data-testid='popup-close-button'
              placeholder={`data:image/${imagePlaceholder}`}
            />
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export const Popup = memo(PopupComponent);
