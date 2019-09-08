import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './map.css';

const index = () => {
  const defaultPosition = {
    center: {
      lat: 29.589014,
      lng: -81.202043,
    },
    zoom: 15
  }
  return (
    <div className={styles.container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBw0jx30d5BCdlOcO6RTfqh0j1zmJFKFVU' }}
        defaultCenter={defaultPosition.center}
        defaultZoom={defaultPosition.zoom}
      />
    </div>
  )
}

export default index
