import React from "react";

import {headerOption} from "../../../../data/HeaderOption.js";

import "./HeaderMenu.css"

function HeaderMenu() {
    return (
        <ul className="HeaderMenu">
            {headerOption.map((item) => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default HeaderMenu;