import React from 'react';
import CodeImg from "../images/code.svg";
import { techSkills } from '../data/HardSkills';
import Skills from "./Skills";

const TechnicalSkills = () => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="iconAlignment">
                        <img className="icons mx-auto card-img-top" src={CodeImg} alt="Icon" />
                    </div>
                    {
                        techSkills.map((skill) => {
                            return (
                                <div className="skillBox">
                                    <Skills
                                        skills={skill}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TechnicalSkills
