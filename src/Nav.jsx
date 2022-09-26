import { useToggle } from "./hooks/useToggle";
import { List } from "phosphor-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [hamburguerMenu, toggleHarmburguerMenu] = useToggle(false);
	const tabs = ["home", "about", "projects", "contact"];

	const navBar = tabs.map((tab) => (
		<NavLink
			to={`/${tab}`}
			key={`${tab}+${Math.floor(Math.random() * 10)}`}
			className={(navData) => (navData.isActive ? "active tilt" : " border_style tilt")}
		>
			{tab}
		</NavLink>
	));

	// TODO: Dark Mode.
	// const [isDarkMode, setIsDarkMode] = useState(true);
	// useEffect(() => {
	// 	document.querySelector("html").setAttribute("data-theme", isDarkMode ? "dark" : "light");
	// }, [isDarkMode]);

	return (
		<nav className="float_nav">
			<ul className="float_nav_content float_nav_style">{navBar}</ul>
			<span
				className="hamburger border_style button_style tilt"
				onClick={() => toggleHarmburguerMenu((prev) => !prev)}
			>
				<List size={28} color="var(--white)" weight="bold" />
				{hamburguerMenu ? (
					<ul className="float_nav_content float_nav_style float_nav_column">{navBar}</ul>
				) : (
					""
				)}
			</span>
		</nav>
	);
};

export default Nav;
