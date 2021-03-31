import React from 'react';
import "./Jobs.css";

const Jobs = ( {role, company, year, jobDescription }) => {
    return (
        <div className="jobSection">
            <h1 className="role">{role}</h1>
            <h2 className="company">{company}</h2>
            <h3 className="year">{year}</h3>
            <p className="jobDescription">{jobDescription}</p>
        </div>
    )
}

export default Jobs
