import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/importStyles.js";
import { BrowserRouter } from "react-router-dom";
import { Sparkle } from "phosphor-react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="custom-shape">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<defs>
					<linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
						<stop offset="5%" stopColor="var(--grad-purple)"></stop>
						<stop offset="95%" stopColor="var(--less-pink)"></stop>
					</linearGradient>
				</defs>
				<path
					d="M0,27.35 A600.21,600.21,0,0,0,321.39,56.44
                 C379.39,45.65,435.545,26.31,493.39,14.58
                 C575.78,-2.14,661.58,-3.15,743.84,14.19
                 C823.78,31,906.67,72,985.66,92.83
                 C1055.71,111.31,1132.19,118.92,1200,95.83V120H0Z"
					stroke="none"
					shapeRendering="auto"
					strokeWidth="0"
					fill="url(#gradient)"
				></path>
			</svg>
		</div>

		<span className="sparkle">
			<Sparkle size={24} color="#d3abde" weight="duotone" />
		</span>

		<App />
	</React.StrictMode>
);
