import React from 'react';
import './Navigation.css';

// a component with no state. a pure function. Thus no class..

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li><button>Sign Out</button></li>
			</ul>
		</nav>
	);
}

export default Navigation;