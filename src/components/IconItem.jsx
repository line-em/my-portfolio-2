import React from "react";

export default function IconItem({ abbr, src, text, altText }) {
	return (
		<abbr title={abbr} className="box_container">
			<img src={src} loading="lazy" alt={altText} />
			<figcaption>{text}</figcaption>
		</abbr>
	);
}
