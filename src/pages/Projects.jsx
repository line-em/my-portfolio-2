import ProjectItem from "../components/ProjectItem";
import projects from "../data/projects";
import useWindowDimensions from "../hooks/useWindowDimensions";
import React from "react";

const Projects = () => {
	const { width: windowWidth } = useWindowDimensions();
	const listOfProjects = projects.map((project) => (
		<ProjectItem
			key={project.id}
			id={project.id}
			title={project.title}
			image={project.image}
			tech={project.tech}
			github={project.github}
			live={project.live}
			description={project.description}
		/>
	));

	return (
		<section className="main_container main_large" role="note" id="about">
			<div className="neg-top">
				<h2>My Projects</h2>
				<section className="project_container">{listOfProjects}</section>

				<p className="pos-top text-center pos-bottom">
					Currently, I'm ironing out the bugs on this{" "}
					<a
						href="https://github.com/line-em/react-netflix"
						target="_blank"
						rel="noopener noreferrer"
					>
						Netflix Clone project
					</a>{" "}
					, and it's almost out of the oven! 🍳
				</p>
			</div>
		</section>
	);
};

export default Projects;
