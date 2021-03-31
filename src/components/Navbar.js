import React from 'react';
import MenuSVG from "../images/menu.svg";
import MyLogo from "../images/monarandhawa-logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <nav className="navbar static-top navbar-expand-md">
            <a className="navbar-brand" href="/"> <img className="myLogo" src={MyLogo} alt="logo"/></a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"><img src={MenuSVG} alt="hamburger-menu"/> </span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto nav-fill">
                    <li>
                        <a className="nav-link text-dark font-weight-bold" href="/about">About</a>
                    </li>
                    <li>
                        <a className="nav-link text-dark font-weight-bold" href="/experience">Experience</a>
                    </li>
                    <li>
                        <a className="nav-link text-dark font-weight-bold" href="/projects">Projects</a>
                    </li>
                    <li>
                        <a className="nav-link text-dark font-weight-bold" href="/contact">Contact</a>
                    </li>
                </ul>
            </div> 
        </nav>
        </>
    )
}

export default Navbar
