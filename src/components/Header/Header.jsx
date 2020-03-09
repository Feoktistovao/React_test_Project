import React from "react";
import classes from './Header.module.css';
import logoSvg from "../../logo.svg";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src={logoSvg}/>
        </header>
    );
}

export default Header;
