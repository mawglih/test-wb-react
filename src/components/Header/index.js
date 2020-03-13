import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styles from './header.css';

const index = () => {
  return (
    <div className={styles.container}>
      <Link to="/">Logo</Link>
      <Link to="/swapi">Starships</Link>
      <Link to="/poke">Pokemons</Link>
    </div>
  )
}

export default withRouter(index);
