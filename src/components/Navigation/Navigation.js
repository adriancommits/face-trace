import React from 'react';
import styles from './Navigation.module.css';
import logo from '../../img/logo.png';

// a component with no state. a pure function. Thus no class..

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li style={{float:"left"}}><img src={logo} alt="logo" width="40px"></img></li>
				<li style={{float:"right"}}><button className={styles.button}>Sign Out</button></li>
			</ul>
		</nav>
	);
}

export default Navigation;