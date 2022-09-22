import React from "react";

const Projects = () => {
	return (
		<section className="main_container" role="note" id="about">
			<article className="description-page">
				<h1>My Projects</h1>
				<div>
					<img src="../src/misc/project/quizzical2.png" />
					<h4>Quizzical</h4> - <a href="">Live</a> / <a href="">GitHub</a>
					<strong>Tech:</strong> React, JS
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium
						consequuntur ipsa fuga aspernatur voluptatem? Earum voluptas esse
						voluptatibus facilis, delectus laboriosam culpa iste. Cupiditate fugit
						recusandae nihil voluptatibus quas.
					</p>
				</div>
				{/* add loading="lazy" */}
			</article>
		</section>
	);
};

export default Projects;
