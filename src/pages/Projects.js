import React from 'react';
import SittingAvatar from "../images/sitting-avatar.svg";
import WorkingAvatar from "../images/working-avatar.svg";
import PointingAvatar from "../images/pointing-avatar.svg";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="project-container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col sectionTitle">
                            <h1>
                                Projects
                            </h1>
                        </div>
                    </div>

                    <div className="row project">
                        <div className="col-sm-12 col-md-6 col-lg-4 iconAlignment">
                            <img className="img-fluid projectAvatars" src={SittingAvatar} alt="Icon" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="row project">
                        <div className="col-sm-12 col-md-6 col-lg-4 iconAlignment">
                            <img className="img-fluid projectAvatars" src={WorkingAvatar} alt="Icon" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="row project">
                        <div className="col-sm-12 col-md-6 col-lg-4 iconAlignment">
                            <img className="img-fluid projectAvatars" src={PointingAvatar} alt="Icon" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
