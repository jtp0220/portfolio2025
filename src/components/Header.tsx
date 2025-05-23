import { useState } from "react";
import {Link} from "react-router-dom";

function Logo(){
    return (
        <div className="logo-wrapper">Jeremy Tran Perez</div>
    )
}

function Tab({title, to} : {title:string, to:string}){
    return (
        <div>
            <Link to={to}>
                <span>{title}</span>
            </Link>
        </div>
    );
}

function Navbar(){
    const tabs = [
        {title: "Home", to: "/"},
        {title: "About", to: "/about"},
        {title: "Skills", to: "/skills"},
        {title: "Projects", to: "/projects"},
        {title: "Photos", to: "/photos"}
    ]

    return (
        <nav>
            <ul className="tab-list">
                {
                    tabs.map((tab, index) => (
                        <li className="tab" key={index}><Tab title={tab.title} to={tab.to}></Tab></li>
                    ))
                }
            </ul>
        </nav>
    );
}

function Header(){
    return (
        <header id="header">
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header;