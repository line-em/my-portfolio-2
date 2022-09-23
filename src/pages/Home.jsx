import React, { useEffect } from "react";
import { HandWaving } from "phosphor-react";
import { Link } from "react-router-dom";
import profileImage from "../misc/profile_photo2_cut.png";
import Typed from "typed.js";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = () => {
	const { width: windowWidth } = useWindowDimensions();
	const adjEl = React.useRef(null);
	const typed = React.useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				"tea lover 🫖",
				"cat mom 🐱",
				"bookworm 📚",
				"creative 🎨",
				"sci-fi and fantasy fan 🚀",
				"video game player 🎮"
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

	// FIXME: Halftone em var(--dark) embaixo
	return (
		<section className="main_container col-2 text-center" role="note" id="home">
			<img
				src={profileImage}
				alt=""
				style={windowWidth > 900 ? { width: "550px" } : { width: "450px" }}
				className="float"
				loading="lazy"
			/>
			<article className="description_area">
				<HandWaving
					size={windowWidth > 900 ? 68 : 0}
					color="var(--dark-pink)"
					className="wave"
				/>
				<h1>Hey there! I'm Aline.</h1>
				<h3>
					An artist turned front-end developer and a{" "}
					<span className="typed_text" ref={adjEl}></span>
				</h3>
				<hr />
				<p>
					Get to know me by <Link to="/about">checking out my profile!</Link>
				</p>
			</article>
		</section>
	);
};

export default Home;
