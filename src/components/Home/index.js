import React from 'react';
import Map from '../Map';
import styles from './home.css';

const index = () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.image}>
        <img src="" alt="awning"/>
      </div>
      <div className={styles.image}>
        <img src="" alt="enclosure"/>
      </div>
      <div className={styles.image}>
        <img src="" alt="upholstery"/>
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.map}>
        <Map/>
      </div>
    </div>
  </div>
);

export default index;
