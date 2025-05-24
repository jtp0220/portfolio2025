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
            <Toggle />
            <Navbar />
        </header>
    )
}

function Toggle(){
    return (
        <div>
            <div className="toggle-wrapper sandwich"><svg className="toggle" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div>
            <div className="toggle-wrapper close"><svg className="toggle" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
        </div>
    )
}

export default Header;