import React from "react";
import { useToggle } from "../hooks/useToggle";

const Projects = () => {
	const [selected, toggleSelected] = useToggle();

	return (
		<section className="main_container main_large" role="note" id="about">
			<div className="neg-top">
				<h1>My Projects</h1>
				<section className="project_container col-4">
					<div className="project_box">
						<div className="project_image">
							<img src="../src/misc/project/quizzical2.png" />
						</div>
						<h4>
							Quizzical - <a href="">Live</a> / <a href="">GitHub</a>
						</h4>
						<div className="project_tech">
							<span className="project_badge">React</span>
							<span className="project_badge">Javascript</span>
							<span className="project_badge">Open Trivia API</span>
						</div>
						<div className="project_details text-justify">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
								laudantium consequuntur ipsa fuga aspernatur voluptatem? Earum
								voluptas esse voluptatibus facilis, delectus laboriosam culpa iste.
								Cupiditate fugit recusandae nihil voluptatibus quas.
							</p>
						</div>
					</div>{" "}
					<div>
						<img src="../src/misc/project/quizzical2.png" />
						<h4>
							Quizzical - <a href="">Live</a> / <a href="">GitHub</a>
						</h4>
						<strong>Tech:</strong> React, JS
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium
							consequuntur ipsa fuga aspernatur voluptatem? Earum voluptas esse
							voluptatibus facilis, delectus laboriosam culpa iste. Cupiditate fugit
							recusandae nihil voluptatibus quas.
						</p>
					</div>{" "}
					<div>
						<img src="../src/misc/project/quizzical2.png" />
						<h4>
							Quizzical - <a href="">Live</a> / <a href="">GitHub</a>
						</h4>
						<strong>Tech:</strong> React, JS
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium
							consequuntur ipsa fuga aspernatur voluptatem? Earum voluptas esse
							voluptatibus facilis, delectus laboriosam culpa iste. Cupiditate fugit
							recusandae nihil voluptatibus quas.
						</p>
					</div>{" "}
					<div>
						<img src="../src/misc/project/quizzical2.png" />
						<h4>
							Quizzical - <a href="">Live</a> / <a href="">GitHub</a>
						</h4>
						<strong>Tech:</strong> React, JS
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium
							consequuntur ipsa fuga aspernatur voluptatem? Earum voluptas esse
							voluptatibus facilis, delectus laboriosam culpa iste. Cupiditate fugit
							recusandae nihil voluptatibus quas.
						</p>
					</div>
				</section>
				{/* add loading="lazy" */}
			</div>
		</section>
	);
};

export default Projects;
