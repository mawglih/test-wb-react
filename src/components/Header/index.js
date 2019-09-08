import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styles from './header.css';

const index = () => {
  return (
    <div className={styles.container}>
      <Link to="/">Logo</Link>
      <Link to="/awnings">Awnings</Link>
      <Link to="/upholstery">Upholstery</Link>
      <Link to="/enclosure">Enclosure</Link>
    </div>
  )
}

export default withRouter(index);
