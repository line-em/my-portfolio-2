import { LinkedinLogo, GithubLogo } from "phosphor-react";

const SocialsElement = () => {
	return (
		<section className="social_container">
			<GithubLogo color="var(--dark-pink)" size="24" weight="fill" />
			<a href="https://github.com/line-em" target="_blank" rel="noopener noreferrer">
				Github
			</a>
			<br />
			<LinkedinLogo color="var(--dark-pink)" size="24" weight="fill" />
			<a
				href="https://www.linkedin.com/in/alineemily/"
				target="_blank"
				rel="noopener noreferrer"
			>
				LinkedIn
			</a>
		</section>
	);
};

export default SocialsElement;
