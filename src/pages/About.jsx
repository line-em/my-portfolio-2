import React from "react";
import IconItem from "../components/IconItem";
import useWindowDimensions from "../hooks/useWindowDimensions";
import tools from "../data/tools";

function About() {
	const { width: windowWidth } = useWindowDimensions();
	return (
		<section
			className={`main_container main_large ${windowWidth > 1000 ? "col-3" : "col-2"}`}
			role="note"
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
			<article>
				<h2>Tech Skills</h2>
				<div className="skills">
					{tools.map((tool) => (
						<IconItem
							key={tool.id}
							abbr={tool.abbr}
							src={tool.src}
							altText={tool.altText}
							text={tool.text}
							bgcolor={tool.bgcolor}
							txtcolor={tool.txtcolor}
						/>
					))}
				</div>

				<p>
					I've been studying <strong>testing</strong>, and I've also worked with{" "}
					<strong>Tailwind</strong>, <strong>Firebase</strong>, and{" "}
					<strong>React-Router</strong>.
				</p>
				<hr />
				<h2>Design Skills</h2>
				<p>
					As a Designer, I've worked with the Adobe Suite (Photoshop, Illustrator,
					InDesign, After Effects and Premiere).
				</p>
				<hr />
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
				<p>
					🐱 I love spending time with my cat, Leia, the rebel princess 👑. She's one
					talkative kitten!
				</p>

				<hr />
				<h3>Socials</h3>

				<a href="https://github.com/line-em" target="_blank" rel="noopener noreferrer">
					Github
				</a>
				<br />
				<a
					href="https://www.linkedin.com/in/alineemily/"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
			</article>
		</section>
	);
}

export default About;
