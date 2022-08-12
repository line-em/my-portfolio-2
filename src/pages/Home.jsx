import React from "react";
import { HandWaving } from "phosphor-react";
import { Link } from "react-router-dom";
import profileImage from "../misc/profile_arcane_cut.png";
import Typed from "typed.js";

const Home = () => {
	const adjEl = React.useRef(null);
	const typed = React.useRef(null);
	React.useEffect(() => {
		const options = {
			strings: [
				"tea lover 🫖",
				"cat mom 🐱",
				"bookworm 📚",
				"creative 🎨",
				// "digital artist 🎨",
				"sci-fi and fantasy fan 🚀",
				"video game player 🎮"
				// "writing enthusiast 📝"
			],
			typeSpeed: 60,
			backSpeed: 40,
			backDelay: 900,
			loop: true
		};
		typed.current = new Typed(adjEl.current, options);
		return () => {
			typed.current.destroy();
		};
	}, []);
	return (
		<section className="main_container col-2" role="note" data-aos="fade-up" id="about">
			<article className="description_area">
				<HandWaving size={68} color="var(--grad-purple)" />
				<h1>Hey there! I'm Aline.</h1>
				<h3>
					An artist turned <strong>front-end developer</strong> and a{" "}
					<span className="typed_text" ref={adjEl}></span>
				</h3>
				<hr />
				<p>
					Want to know more? <Link to="/about">Check out my profile!</Link> 🌈
				</p>
			</article>
			<img src={profileImage} alt="" style={{ width: "450px" }} className="float" />
		</section>
	);
};

export default Home;
