import React from 'react';
import MenuSVG from "../images/menu.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <nav className="navbar static-top navbar-expand-md">
            <a className="navbar-brand myLogo" href="/"> monarandhawa </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"><img src={MenuSVG} alt="hamburger-menu"/> </span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <a className="nav-link text-dark nav-link-fade-up" href="/">Home</a>
                    </li>
                    <li>
                        <a className="nav-link text-dark nav-link-fade-up" href="/about">About</a>
                    </li>
                    <li>
                        <a className="nav-link text-dark nav-link-fade-up" href="/experience">Experience</a>
                    </li>
                    <li>
                        <a className="nav-link text-dark nav-link-fade-up" href="/projects">Projects</a>
                    </li>
                    <li>
                        <a className="nav-link text-dark nav-link-fade-up" href="mailto:mann.randhawa@hotmail.com">Contact</a>
                    </li>
                </ul>
            </div> 
        </nav>
        </>
    )
}

export default Navbar
