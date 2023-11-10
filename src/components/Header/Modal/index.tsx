import { Popup } from '@components/Popup';
import { FC } from 'react';

const source = process.env.NEXT_PUBLIC_ABOUT_US_VIDEO;

export const Modal: FC = () => {
  return (
    <Popup data-testid='popup'>
      <iframe
        width='100%'
        src={source}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </Popup>
  );
};
