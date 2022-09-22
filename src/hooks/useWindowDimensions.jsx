import { useState, useEffect } from "react";

const getDimensions = () => {
	const { innerHeight: height, innerWidth: width } = window;
	return {
		height,
		width
	};
};

export default function useWindowDimensions(second) {
	const [windowDimension, setWindowDimension] = useState(getDimensions());

	useEffect(() => {
		const handleResize = () => setWindowDimension(getDimensions());
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimension;
}
