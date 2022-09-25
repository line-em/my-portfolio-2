import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import { useState } from "react";

// FIXME: CatPics bg
const ProjectItem = ({ image, title, live, github, tech, description, id }) => {
	const [imageIndex, setImageIndex] = useState(0);

	const cycleImages = (currentIndex) => {
		const maxIndex = image.length - 1;

		if (currentIndex === maxIndex) {
			return setImageIndex(0);
		} else {
			return setImageIndex((prev) => prev + 1);
		}
	};

	return (
		<section className="project_box" key={id}>
			<div className="project_image">
				<div className="project_arrows">
					<ArrowFatLeft size={28} weight="fill" onClick={() => cycleImages(imageIndex)} />
					<ArrowFatRight
						size={28}
						weight="fill"
						onClick={() => cycleImages(imageIndex)}
					/>
				</div>
				<img src={image[imageIndex]} alt={title} loading="lazy" />
			</div>
			<h4>
				{title} -{" "}
				<a href={live} target="_blank" rel="noopener noreferrer">
					Live
				</a>{" "}
				/{" "}
				<a href={github} target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
			</h4>

			<section className="project_tech ">
				{tech.map((tech) => (
					<span className="project_badge ">{tech}</span>
				))}
			</section>
			<section className="project_details text-justify">
				<p>{description}</p>
			</section>
		</section>
	);
};

export default ProjectItem;
