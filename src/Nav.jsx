import React, { useEffect, useState } from "react";
import { Moon } from "phosphor-react";
import { Link } from "react-router-dom";
import NavItem from "./components/NavItem";

const Nav = () => {
	const [currentTab, setCurrentTab] = useState("home");
	const tabs = ["home", "about", "projects", "contact"];
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		document.querySelector("html").setAttribute("data-theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	const navBar = tabs.map((tab) => (
		<Link to={`/${tab}`} key={`${tab}+${Math.floor(Math.random() * 10)}`}>
			<NavItem currentTab={currentTab} tab={tab} setCurrentTab={() => setCurrentTab(tab)} />
		</Link>
	));

	return (
		<>
			<nav className="float_nav">
				<ul className="float_nav_content float_nav_style">{navBar}</ul>
				<span
					className="hamburger border_style button_style"
					onClick={() => setIsDarkMode(!isDarkMode)}
				>
					{/* <List weight="bold" size={28} color="var(--white)" /> */}
					<Moon size={28} color="var(--white)" weight="fill" />
				</span>
			</nav>
		</>
	);
};

export default Nav;
