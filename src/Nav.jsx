import React from "react";
import { Palette, List } from "phosphor-react";

const Nav = () => {
	return (
		<>
			<nav className="hamburger">
				<Palette weight="duotone" size={28} />
				{/* <List weight="bold" size={28} /> */}
			</nav>
			<nav className="float_nav">
				<ul className="float_nav_content float_nav_style">
					<li className="float_nav_selected">about me</li>
					<li>portfolio</li>
					<li>contact me</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
