import React from 'react';
import GroupImg from "../images/group.svg";
import { softSkills } from '../data/SoftSkills';
import Skills from "./Skills";

const CollaborativeSkills = () => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="iconAlignment">
                        <img className="icons mx-auto card-img-top" src={GroupImg} alt="Icon" />
                    </div>
                    {
                        softSkills.map((skill) => {
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

export default CollaborativeSkills
