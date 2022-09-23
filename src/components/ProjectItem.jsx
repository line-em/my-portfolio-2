// import { useToggle } from "../hooks/useToggle";
import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import { useState } from "react";

// FIXME: CatPics bg
const ProjectItem = ({ image, title, live, github, tech, description, id }) => {
	const [imageIndex, setImageIndex] = useState(0);

	const cycleImages = (currentIndex) => {
		const maxIndex = image.length - 1;

		if (currentIndex === maxIndex) {
			return setImageIndex(0);
		} else if (currentIndex === 0) {
			return setImageIndex(maxIndex);
		} else {
			return setImageIndex((prev) => prev + 1);
		}
	};

	return (
		<section
			className={`project_box ${id % 2 ? "tiny-float" : "tiny-float delay-1s"}`}
			key={id}
		>
			{typeof image !== "string" ? (
				<>
					<div className="project_arrows">
						<ArrowFatLeft
							size={38}
							weight="fill"
							onClick={() => cycleImages(imageIndex)}
						/>
						<ArrowFatRight
							size={38}
							weight="fill"
							onClick={() => cycleImages(imageIndex)}
						/>
					</div>
					<div className="project_image">
						<img src={image[imageIndex]} alt={title} loading="lazy" />
					</div>
				</>
			) : (
				<div className="project_image">
					<img src={image} alt={title} loading="lazy" />
				</div>
			)}
			<h4>
				{title} - <a href={live}>Live</a> / <a href={github}>GitHub</a>
			</h4>
			<section className="project_tech">
				{tech.map((tech) => (
					<span className="project_badge">{tech}</span>
				))}
			</section>
			<section className="project_details text-justify">
				<p>{description}</p>
			</section>
		</section>
	);
};

export default ProjectItem;
