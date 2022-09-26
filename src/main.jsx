import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/importStyles.js";
import Wave from "./components/Wave";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Wave />
		<section className="gradient-wrapper">
			<App />
		</section>
	</React.StrictMode>
);
