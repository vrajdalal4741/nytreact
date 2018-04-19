import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
	<nav className="navbar">
		<ul>
			<li>
				<link className="navbar-link" to="/">
					New York Times Articles
				</link>
			</li>
			<li>
				<link className="navbar-link" to="/saved/articles">
					Saved Articles
				</link>
			</li>
		</ul>
	</nav>
);

export default Nav;
