import React from 'react';
import "./Jobs.css";

const Jobs = ( {role, description, company, year, point1, point2, point3, point4 }) => {
    return (
        <div className="jobSection">
            <h1 className="role">{role}</h1>
            <h2 className="company">{company}</h2>
            <h3 className="year">{year}</h3>
            <p className="programDescription">{description}</p>
            <ul className="jobDescription">
                <li className="duties">
                    {point1}
                </li>
                <li className="duties">
                    {point2}
                </li>
                <li className="duties">
                    {point3}
                </li>
                <li className="duties">
                    {point4}
                </li>
            </ul>
        </div>
    )
}

export default Jobs
