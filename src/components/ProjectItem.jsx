const ProjectItem = ({ image, title, live, github, tech, description, id }) => {
	return (
		<section className={`project_box float ${id % 2 ? "float" : "float delay-1s"}`}>
			<div className="project_image">
				<img src={image} alt={title} loading="lazy" />
			</div>
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
