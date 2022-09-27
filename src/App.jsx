import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React, { useState, useEffect } from "react";
import { Orbit } from "@uiball/loaders";

function App() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1100);
	}, []);
	return (
		<HashRouter>
			{isLoading ? (
				<section className="main_container fadeout">
					<Orbit size={64} color="var(--dark-pink)" />
				</section>
			) : (
				<>
					<Nav />
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</>
			)}
		</HashRouter>
	);
}

export default App;
