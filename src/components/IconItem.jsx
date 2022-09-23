import React from "react";

export default function IconItem({ abbr, src, text, altText, txtcolor, bgcolor, animationClass }) {
	const skillStyle = {
		color: txtcolor,
		backgroundColor: bgcolor
	};

	return (
		<div className={"skills_item " + animationClass}>
			<img
				src={src}
				loading="lazy"
				alt={altText}
				style={{ mixBlendMode: "multiply" }}
				className="wave-invert"
			/>
			<abbr title={abbr} style={skillStyle}>
				{text}
			</abbr>
		</div>
	);
}
