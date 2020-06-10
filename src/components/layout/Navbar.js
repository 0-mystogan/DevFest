import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/schedule">SCHEDULE</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
