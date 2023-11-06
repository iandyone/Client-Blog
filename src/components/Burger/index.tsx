'use client';

import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { toggleBuger } from '@reducers/app';
import { setPageScroll } from '@utils';
import { FC, MouseEvent } from 'react';

import styles from './burger.module.scss';

const { container, button, line, active } = styles;

export const BurgerMenu: FC = () => {
  const { burger } = useSelectorTyped((store) => store.app);
  const lineClassName = burger ? `${line} ${active}` : line;
  const dispatch = useDispatchTyped();

  function handlerOnClickButton() {
    setPageScroll(burger);
    dispatch(toggleBuger(!burger));
  }

  function handlerOnClickMenu(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div className={container} onClick={handlerOnClickMenu} data-testid='burger'>
      <div className={button} onClick={handlerOnClickButton}>
        <span className={lineClassName} />
        <span className={lineClassName} />
        <span className={lineClassName} />
      </div>
    </div>
  );
};
