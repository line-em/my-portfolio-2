import React from "react";
import ProjectItem from "../components/ProjectItem";
import { useToggle } from "../hooks/useToggle";
import projects from "../data/projects";

const Projects = () => {
	const [selected, toggleSelected] = useToggle();

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
				<h1>My Projects</h1>
				<section className="project_container col-4">{listOfProjects}</section>

				<p>
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
