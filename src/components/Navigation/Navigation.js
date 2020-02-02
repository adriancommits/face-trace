import React from 'react';
import styles from './Navigation.module.css';
import logo from '../../img/logo.png';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li style={{ cssFloat: 'left' }}>
          <img src={logo} alt="logo" width="40px"></img>
        </li>
        <li style={{ cssFloat: 'right' }}>
          <button className={styles.button}>Sign Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
