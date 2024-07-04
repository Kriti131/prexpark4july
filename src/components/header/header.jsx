import React from "react";
import "./header.css";

import Logo from "../../../public/assets/Logo.svg?react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import HeaderMenu from "./HeaderMenu/HeaderMenu.jsx";
import ProfileCard from "./ProfileCard/ProfileCard.jsx";
import userDetails from "../../../data/userDetails.js";

function Header() {
    return (
        <nav className="Header">
            <div className="headerLogo" >
                <Logo/>
            </div>
            <SearchBar/>
            <HeaderMenu/>
            <ProfileCard userDetails={userDetails}/>
        </nav>
    )
}

export default Header;