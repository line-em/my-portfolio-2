import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./helpers/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="swirl"></div>
		<App />
	</React.StrictMode>
);
