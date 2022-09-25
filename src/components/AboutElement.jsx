import { Link } from "react-router-dom";

const AboutElement = () => {
	return (
		<>
			<h2>About me</h2>
			<p>
				I'm Aline, a <strong>front-end developer</strong> currently based in Portugal,
				building web applications using React and looking for a{" "}
				<strong>career change</strong>. I love delivering good and{" "}
				<strong>responsive user interfaces</strong> and I'm ready to tackle more challenges!{" "}
				<strong>I enjoy CSS</strong>, and it's one of the things I'm most excited to work
				with and get better at.
			</p>
			<p>
				I'm a hard worker and eager to learn more. If you want to get in touch with me,
				please <Link to="/contact">come over here!</Link> You can also reach out via my
				socials.
			</p>
			<p>
				Want to check <Link to="/projects">some of my projects?</Link>
			</p>
		</>
	);
};

export default AboutElement;
