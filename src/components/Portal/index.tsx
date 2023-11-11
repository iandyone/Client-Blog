'use client';

import { FC, memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './types';

const Portal: FC<PortalProps> = ({ children, id = 'Portal' }) => {
  const container = document.createElement('div');
  container.setAttribute('id', id);

  useEffect(() => {
    const appElement = document.querySelector('.app');
    appElement.appendChild(container);

    return () => {
      appElement.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

export default memo(Portal);
