import React, { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";

export default function NavItem({ currentTab, tab, setCurrentTab }) {
	return (
		<li
			className={currentTab === tab ? "float_nav_selected tilt" : "border_style tilt"}
			disabled={currentTab === tab ? true : ""}
			onClick={() => setCurrentTab(tab)}
		>
			{tab}
		</li>
	);
}
