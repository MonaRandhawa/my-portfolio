import React from 'react';
import IdeaImg from "../images/idea.svg";
import { methodologies } from '../data/MethodSkills';
import Skills from "./Skills";

const Methodologies = () => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="iconAlignment">
                        <img className="icons mx-auto card-img-top" src={IdeaImg} alt="Icon" />
                    </div>
                    {
                        methodologies.map((skill) => {
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

export default Methodologies
