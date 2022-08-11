import React from "react";
import profileImage from "../misc/profile_arcane_cut.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// FIXME: Should I install AOS?

function About() {
	// AOS.init();
	return (
		<section className="main_container" role="note" data-aos="fade-up" id="about">
			<article className="description-page">
				<img src={profileImage} alt="" style={{ width: "450px" }} />
				<blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing el</blockquote>
			</article>
			<article className="description-page">
				<h1>Hey there!👋🏽</h1>
				<p>
					I'm Aline, a <strong>front-end developer</strong> currently based on Portugal,
					building web applications using React. I like to deliver a good user
					experiences, focusing on responsiveness and other things!
				</p>
				<p>
					I'm a hard worker and eager to learn more. I'm looking for more knowledge and
					for a chance to contribute in a real project!
				</p>
				<hr />
				<h3>Skills</h3>
				<p>LMKSMDA</p>
				<p>LMKSMDA</p>
			</article>

			<article className="skills">
				<h3>Some facts about me:</h3>
				<p>
					💻 My very first experience with coding was a long time ago, making some
					fansites of things I liked when I was a kid!
				</p>
				<p>🐱 I love spending time with my cat, Leia. She's one talkative kitten!</p>
				<p>
					🎮 I love books, games and animation. I also already worked with games in the
					past!
				</p>
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
