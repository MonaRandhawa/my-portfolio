import React from 'react';
import Jobs from '../components/Jobs';
import "./ProfessionalExperience.css";

const ProfessionalExperience = () => {
    return (
        <div className="card">
            <div className="card-body cardHolder">
                <div className="row">
                    <div className="col sectionTitle">
                        <h1>
                            Professional Experience
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 align-items-center">

                        <div className="card jobDescription">
                            <Jobs
                                role="Google UX Design Certificate Course"
                                company="Coursera"
                                year="6 month program with an expected completion date of Aug 2021"
                                description="This program includes the following learnings:"
                                point1="Following the design process: empathize with users, define pain points, ideate solutions, create wireframes and prototypes, test and iterate on designs"
                                point2="Applying foundational UX concepts, like user-centered design, accessibility, and equity-focused design"
                                point3="Understanding the basics of UX research, like planning research studies, conducting interviews and usability studies, and synthesizing research results"
                                point4="Creating 3 end-to-end projects: a mobile app, a responsive website, and a cross-platform experience"
                            />
                        </div>

                        <div className="card jobDescription">
                            <Jobs
                                role="Full Stack Developer - Learner"
                                company="EvolveU"
                                year="Sep 2020 - Feb 2021"
                                point1="Collaborated with two distributed teams to create working Full Stack applications"
                                point2="Participated in design sprints by creating user stories, wireframing, prototyping and
                        useability testing for 2 full stack applications"
                                point3="Acted as a Scrum Master by facilitating daily stand-ups and weekly sprint meetings"
                                point4="Actively participated in 6 retrospectives to provide meaningful feedback and to focus on
                        areas of improvement for future sprints"
                            />
                        </div>

                        <div className="card jobDescription">
                            <Jobs
                                role="Regional Sales Coordinator"
                                company="Fairmont Hotels"
                                year="Jul 2018 - Present (temporarily laid off from May 2020 - Dec 2020 due to COVID pandemic)"
                                point1="Providing onboarding support for new customers and engaging with 140 + existing clients across a variety of channels to build and maintain relationships"
                                point2="Collaborating with Regional Sales Managers to create 140+ annual client contracts"
                                point3="Providing long term support and solutions to clients with a 24-hour turnaround strategy"
                                point4="Improving systems and processes by streamlining communication and reporting procedures for a regional team"
                            />
                        </div>

                        <div className="card jobDescription">
                            <Jobs
                                role="Tour Reservations Coordinator"
                                company="Fairmont Hotels"
                                year="May 2015 - Feb 2018"
                                point1="Prioritized and addressed high email and phone volumes in a dynamic team setup"
                                point2="Accurately created and organized tour bookings which generated 80% of the hotel’s annual sales revenue"
                                point3="Conducted annual surveys with each key account to gather feedback; this information was shared internally to drive improvement of our processes and customer experiences"
                                point4="Worked closely with account holders to quickly resolve booking conflicts in order to provide a seamless experience for our mutual clients"
                            />
                        </div>

                        <div className="card jobDescription">
                            <Jobs
                                role="Royal Service Agent"
                                company="Fairmont Hotels"
                                year="Mar 2014 - May 2015"
                                point1="Provided frontline customer support through phone, email and text in a timely, professional and engaging manner"
                                point2="Managed and prioritized high volumes of emails and phone calls through the use of ticketing software to assist with customer requests"
                                point3="Handled customer issues from start to completion with compassion and empathy"
                                point4="Collaborated with 5 departments on a daily basis to effectively escalate and resolve customer issues"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperience
