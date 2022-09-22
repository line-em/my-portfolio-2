import React from "react";

export default function IconItem({ abbr, src, text, altText, txtcolor, bgcolor }) {
	const skillStyle = {
		color: txtcolor,
		backgroundColor: bgcolor
	};

	return (
		<div className="skills_item">
			<img src={src} loading="lazy" alt={altText} style={{ mixBlendMode: "multiply" }} />
			<abbr title={abbr} style={skillStyle}>
				{text}
			</abbr>
		</div>
	);
}
