import React from 'react';
import "../components/Projects.css";

const Projects = ( { 
    name, 
    projectDescriptionIntro, 
    projectDescriptionProcess, 
    projectDescriptionSolution, 
    screen1, 
    screen2, 
    screen3 
}) => {
    return (
    <>
        <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <img className="iconAlignment projectAvatars" src={screen1} alt="project photos"></img>
                        </div>
                        <div className="col-4">
                            <img className="iconAlignment projectAvatars" src={screen2} alt="project photos"></img>
                        </div>
                        <div className="col-4">
                            <img className="iconAlignment projectAvatars" src={screen3} alt="project photos"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card projectDetails">
                <div className="card-body">
                    <h2 className="projectName">{name}</h2>
                    <p className="projectDescription">{projectDescriptionIntro}</p>
                    <p className="projectDescription">{projectDescriptionProcess}</p>
                    <p className="projectDescription">{projectDescriptionSolution}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Projects