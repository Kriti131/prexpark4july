import React from "react";

import SideBarMenu from "./SideBarMenu/SideBarMenu.jsx";

import "./SideBar.css";

function SideBar() {
    return (
        <div className="SideBar">
            <SideBarMenu/>
        </div>
    );
}

export default SideBar;