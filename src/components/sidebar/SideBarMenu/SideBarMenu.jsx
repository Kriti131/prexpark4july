import React from "react";
import {Link} from "react-router-dom";

import {sideBarOption} from "../../../../data/sideBarOption.js";

import "./SideBarMenu.css";

const Icon = ({id, className}) => (
    <svg className={className}>
        <use href={`/assets/icons/sideBarMenuIcons.svg#${id}`}/>
    </svg>
);

function SideBarMenu() {
    return (
        <ul className="SideBarMenu">
            {sideBarOption.map((item) => (
                <Link key={item.option} to={item.route} style={{textDecoration: 'none'}}>
                    <div className={location.pathname === item.route ? 'SideBarOption Active' : 'SideBarOption'}>
                        <Icon id={location.pathname === item.route ? item.iconActive : item.iconDefault}
                              className="SideBarOptionIcon"/>
                        <li>{item.option}</li>
                    </div>
                </Link>
            ))}
        </ul>
    );
}

export default SideBarMenu;