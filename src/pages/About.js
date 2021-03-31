import React from 'react';
import "../pages/About.css";
import MyPhoto from '../images/mona.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col sectionTitle">
                            <h1>
                                About
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 photoColumn">
                            <img className="img-fluid myPhoto" src={MyPhoto} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <h2>Hi, my name is Mona Randhawa...</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
