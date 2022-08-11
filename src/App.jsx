import { useState } from "react";

import profileImage from "./misc/profile_arcane_cut.png";
import Nav from "./Nav";
import About from "./pages/About";

// FIXME: https://www.smashingmagazine.com/2020/10/introduction-to-framer-motion/
// Carrousel animated: https://codesandbox.io/s/chakra-framer-carousel-demo-rr0dnc
// Animated navbar: https://codesandbox.io/s/animated-menu-underline-using-animatesharedlayout-u18q7?file=/src/App.js:883-891
// Outline navbar: https://codesandbox.io/s/framer-motion-2-animatesharedlayout-animate-between-different-components-dy0bv?file=/src/App.js
// TODO: Tutorial framer motion navbar https://blog.maximeheckel.com/posts/framer-motion-layout-animations/ - https://blog.maximeheckel.com/posts/guide-animations-spark-joy-framer-motion/
// Docs: https://www.framer.com/docs/animate-shared-layout/
// https://blog.bitsrc.io/introduction-to-framer-motion-for-react-4ba5a9cabc1b
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Nav />

			<About />
		</>
	);
}

export default App;
