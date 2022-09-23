import useWindowDimensions from "../hooks/useWindowDimensions";
import AboutElement from "../components/AboutElement";
import SkillsElement from "../components/SkillsElement";
import SocialsElement from "../components/SocialsElement";

function About() {
	const { width: windowWidth } = useWindowDimensions();

	return (
		<section
			className={`main_container main_large text-justify ${
				windowWidth > 1000 ? "col-3" : "col-2"
			}`}
			role="note"
			id="about"
		>
			<article className={`rotate-3 ${windowWidth > 1000 ? "neg-left" : "pos-bottom"}`}>
				<AboutElement />
			</article>

			<article
				className={windowWidth < 1000 && `rotate3 ${windowWidth > 700 && "pos-bottom"}`}
			>
				<SkillsElement />
			</article>

			<article
				className={`${windowWidth > 700 ? "rotate3" : "rotate-3"} ${
					windowWidth < 1000 ? "neg-top" : ""
				}`}
			>
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
					🐱 I love spending time with my cat, Leia, the rebel princess herself! She's one
					talkative kitten.
				</p>

				{windowWidth > 1000 && (
					<>
						<hr />
						<h2>Socials</h2>
						<SocialsElement />
					</>
				)}
			</article>
			{windowWidth < 1000 && (
				<article className={windowWidth > 700 ? "rotate-3 pos-top" : "rotate3 pos-top"}>
					<h2>Socials</h2>
					<SocialsElement />
				</article>
			)}
		</section>
	);
}

export default About;
