import React from "react";
import { Palette, List } from "phosphor-react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<nav className="hamburger">
				<Palette weight="duotone" size={28} />
				{/* <List weight="bold" size={28} /> */}
			</nav>
			<nav className="float_nav">
				<ul className="float_nav_content float_nav_style">
					<Link to={"/"}>
						<li className="float_nav_selected">home</li>
					</Link>
					<Link to={"/about"}>
						<li className="float_nav_content_style">about me</li>
					</Link>
					<Link to={"/projects"}>
						<li className="float_nav_content_style">portfolio</li>
					</Link>
					<Link to={"/contact"}>
						<li className="float_nav_content_style">contact me</li>
					</Link>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
