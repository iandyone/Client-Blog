'use client';

import mapboxgl from 'mapbox-gl';
import { FC, useEffect, useRef } from 'react';

import styles from './map.module.scss';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN;
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN;

const { wrapper, container } = styles;

export const Map: FC = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const data = { lng: 24.5, lat: 53.78, zoom: 4.3 };

    const map = new mapboxgl.Map({
      container: mapRef.current,
      center: [data.lng, data.lat],
      style: process.env.NEXT_PUBLIC_MAP_STYLE,
      zoom: data.zoom,
    });

    const navControl = new mapboxgl.NavigationControl();
    map.addControl(navControl, 'top-right');
  }, []);

  return (
    <section className={wrapper}>
      <div className={container} ref={mapRef} />
    </section>
  );
};
