'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import { ENV } from '@constants/data';
import mapboxgl from 'mapbox-gl';
import { FC, memo, useEffect, useRef } from 'react';

import styles from './map.module.scss';

mapboxgl.accessToken = ENV.MAP_TOKEN;

const MapComponent: FC = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const data = { lng: 26, lat: 54, zoom: 4.1 };

    const map = new mapboxgl.Map({
      container: mapRef.current,
      center: [data.lng, data.lat],
      style: ENV.MAP_STYLE,
      zoom: data.zoom,
    });

    const navControl = new mapboxgl.NavigationControl();
    map.addControl(navControl, 'top-right');
  }, []);

  return (
    <section className={styles.wrapper} data-testid='map-component'>
      <div className={styles.container} ref={mapRef} />
    </section>
  );
};

export const Map = memo(MapComponent);
