import React from "react";
import logoSvg from "../logo.svg";

const Header = () => {
    return (
        <header className='header'>
            <img src={logoSvg}/>
        </header>
    );
}

export default Header;
