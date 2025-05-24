import { useState, useEffect } from "react";
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

function Navbar({isVisible, setIsVisible} : {isVisible:boolean, setIsVisible: (value: boolean) => void}){
    const tabs = [
        {title: "Home", to: "/"},
        {title: "About", to: "/about"},
        {title: "Skills", to: "/skills"},
        {title: "Projects", to: "/projects"},
        {title: "Photos", to: "/photos"}
    ]

    return (
        <nav className={isVisible ? 'open' : ''}>
            <ul className="tab-list">
                {
                    tabs.map((tab, index) => (
                        <li className="tab" onClick={isVisible ? () => setIsVisible(false) : undefined} key={index}><Tab title={tab.title} to={tab.to}></Tab></li>
                    ))
                }
            </ul>
        </nav>
    );
}

function Header(){
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const width = useWindowWidth();

    useEffect(() => {
        if(width > 1000){
            setIsMobile(false);
        } 

        if (width <= 1000){
            setIsMobile(true);
            setIsVisible(false);
        }
    }, [width])

    useEffect(() => {
        if(isVisible){
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isVisible])

    const toggleNavbar = () => {
        setIsVisible(!isVisible);        
    }

    return (
        <header id="header">
            <Logo />
            <div className="toggle-svgs">
                {
                    isMobile && (
                        !isVisible ? (
                            <div className="toggle-svg-wrapper"><svg onClick={toggleNavbar} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div>
                        ) : (
                            <div className="toggle-svg-wrapper"><svg onClick={toggleNavbar} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>                    
                        )
                    )
                }
            </div>
            <Navbar isVisible={isVisible} setIsVisible={setIsVisible}/>
        </header>
    )
}

function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return width;
}

export default Header;