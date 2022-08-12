import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

// FIXME: https://www.smashingmagazine.com/2020/10/introduction-to-framer-motion/
// Carrousel animated: https://codesandbox.io/s/chakra-framer-carousel-demo-rr0dnc
// Animated navbar: https://codesandbox.io/s/animated-menu-underline-using-animatesharedlayout-u18q7?file=/src/App.js:883-891
// Outline navbar: https://codesandbox.io/s/framer-motion-2-animatesharedlayout-animate-between-different-components-dy0bv?file=/src/App.js
// TODO: Tutorial framer motion navbar https://blog.maximeheckel.com/posts/framer-motion-layout-animations/ - https://blog.maximeheckel.com/posts/guide-animations-spark-joy-framer-motion/
// Docs: https://www.framer.com/docs/animate-shared-layout/
// https://blog.bitsrc.io/introduction-to-framer-motion-for-react-4ba5a9cabc1b
