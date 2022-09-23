import design from "../data/design";
import tools from "../data/tools";
import IconItem from "./IconItem";

const SkillsElement = () => {
	return (
		<>
			<h2>Tech Skills</h2>
			<div className="skills">
				{tools.map((tool) => (
					<IconItem
						key={tool.id}
						abbr={tool.abbr}
						src={tool.src}
						altText={tool.altText}
						text={tool.text}
						bgcolor={tool.bgcolor}
						txtcolor={tool.txtcolor}
						animationClass="tilt"
					/>
				))}
			</div>

			<p>
				I've been studying <strong>testing</strong>, and I've also worked with{" "}
				<strong>Tailwind</strong>, <strong>Firebase</strong>, and{" "}
				<strong>React-Router</strong>.
			</p>

			<hr />
			<h2>Design Skills</h2>
			<div className="skills">
				{design.map((tool) => (
					<IconItem
						key={tool.id}
						abbr={tool.abbr}
						src={tool.src}
						altText={tool.altText}
						text={tool.text}
						bgcolor={tool.bgcolor}
						txtcolor={tool.txtcolor}
						animationClass="tilt"
					/>
				))}
			</div>
		</>
	);
};

export default SkillsElement;
