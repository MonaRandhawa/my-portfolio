import React from 'react';
import CollaborativeSkills from "../components/CollaborativeSkills";
import TechnicalSkills from "../components/TechnicalSkills";
import Methodologies from "../components/Methodologies";
import "../pages/Experience.css";
import ProfessionalExperience from '../components/ProfessionalExperience';


const Experience = () => {
    return (
        <div className="experience-container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col sectionTitle">
                            <h1>
                                Skills
                                </h1>
                        </div>
                    </div>

                    <div className="row">
                        <CollaborativeSkills />
                        <TechnicalSkills />
                        <Methodologies />
                    </div>
                </div>
            </div>
            <div className="professionalExperience">
                <ProfessionalExperience />
            </div>
        </div>
    )
}

export default Experience
