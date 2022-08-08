import { useState } from "react";
import { profileImage } from "../public/misc/profile_arcane_cut.png";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<nav className="hamburger">H</nav>
			<nav className="float_nav">
				<ul className="float_nav_content">
					<li className="float_nav_selected">about me</li>
					<li>portfolio</li>
					<li>contact me</li>
				</ul>
			</nav>
			<main className="swirl_bg">
				<img src="" alt="" />
				<div className="main_container">
					<h1>Hey there!</h1>
					<img src={profileImage} alt="" />
					<p>Email alineemily.dev@gmail.com</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam iste
						quibusdam animi corporis quod, nulla reiciendis voluptas amet voluptatibus
						dignissimos commodi fugit, beatae ullam deserunt illo! Reprehenderit, aut
						corrupti?
					</p>
				</div>
			</main>
		</>
	);
}

export default App;
