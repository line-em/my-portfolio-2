import { useState } from "react";
import { List } from "phosphor-react";
import { Link } from "react-router-dom";
import NavItem from "./components/NavItem";

const Nav = () => {
	const [currentTab, setCurrentTab] = useState("home");
	const tabs = ["home", "about", "projects", "contact"];
	const visibleStyle = {
		display: "none"
	};

	const navBar = tabs.map((tab) => (
		<Link to={`/${tab}`} key={`${tab}+${Math.floor(Math.random() * 10)}`}>
			<NavItem currentTab={currentTab} tab={tab} setCurrentTab={() => setCurrentTab(tab)} />
		</Link>
	));

	// TODO: Dark Mode.
	// const [isDarkMode, setIsDarkMode] = useState(true);
	// useEffect(() => {
	// 	document.querySelector("html").setAttribute("data-theme", isDarkMode ? "dark" : "light");
	// }, [isDarkMode]);

	return (
		<>
			<nav className="float_nav">
				<ul className="float_nav_content float_nav_style">{navBar}</ul>

				<span
					className="hamburger border_style button_style"
					onClick={() => console.log("oi")}
				>
					<List size={28} color="var(--white)" weight="bold" />
					<ul
						style={visibleStyle}
						className="float_nav_content float_nav_style float_nav_column"
					>
						{navBar}
					</ul>
				</span>
			</nav>
		</>
	);
};

export default Nav;
