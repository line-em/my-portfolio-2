import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/importStyles.js";
import { Moon } from "phosphor-react";
import Wave from "./components/Wave";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Wave />

		<App />
	</React.StrictMode>
);
