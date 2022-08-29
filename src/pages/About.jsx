import React from "react";
import IconItem from "../components/IconItem";
import tools from "../data/tools";

// import AOS from "aos";
// import "aos/dist/aos.css";
// FIXME: Should I install AOS?

function About() {
	// AOS.init();
	return (
		<section
			className="main_container col-3 main_large"
			role="note"
			data-aos="fade-up"
			id="about"
		>
			<article>
				<h2>About me</h2>
				<p>
					I'm Aline, a <strong>front-end developer</strong> currently based on Portugal,
					building web applications using React. I'm looking forward to be part of a team
					that puts together creative solutions to all sorts of problems! I love
					delivering good user interfaces and I'm ready to tackle more challenges!
					{/* focusing on responsiveness and other things! As of now, I work as
					an designer/illustrator, but I'm looking forward to a career change! */}
				</p>
				<p>
					I'm a hard worker and eager to learn more. I'm looking for more knowledge and
					for a chance to contribute in a real project, if you give me a chance.
				</p>
				<hr />
			</article>
			<article className="full-width">
				<h2>Skills</h2>
				{/* ADD REACT-ROUTER */}
				<div className="skills">
					{tools.map((tool) => (
						<IconItem
							abbr={tool.abbr}
							src={tool.src}
							altText={tool.altText}
							text={tool.text}
						/>
					))}
				</div>
				<h2>Tooling</h2>
				<p>Git / Github</p>
				<p>Yarn / Vite</p>
				<p>Insomnia (API)</p>
			</article>

			<article className="fun">
				<h2>Fun facts:</h2>
				<p>
					💻 My very first experience with coding was a long time ago, making some
					fansites of things I liked when I was a kid! I'm really glad I've picked up
					programming again.
				</p>
				<p>
					🎮 I love books, games and animation. I also already worked with games in the
					past!
				</p>
				<p>🐱 I love spending time with my cat, Leia. She's one talkative kitten!</p>

				<hr />
				<h3>Socials</h3>
				<ul>
					<li>Github</li>
					<li>LinkedIn</li>
				</ul>
			</article>
		</section>
	);
}

export default About;
