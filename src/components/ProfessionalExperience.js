import React from 'react';
import Jobs from '../components/Jobs';

const ProfessionalExperience = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col sectionTitle">
                        <h1>
                            Professional Experience
                        </h1>
                    </div>
                </div>

                <div className="row">
                    
                    <Jobs
                        role="Full Stack Developer - Learner"
                        company="EvolveU"
                        year="Sep 2020 - Feb 2021"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />

                    <Jobs
                        role="Regional Sales Coordinator"
                        company="Fairmont Hotels"
                        year="Jul 2018 - May 2020"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />

                    <Jobs
                        role="Tour Reservations Coordinator"
                        company="Fairmont Hotels"
                        year="May 2015 - Feb 2018"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />

                    <Jobs
                        role="Royal Service Agent"
                        company="Fairmont Hotels"
                        year="Mar 2014 - May 2015"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperience
