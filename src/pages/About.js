import React from 'react';
import "../pages/About.css";
import MyPhoto from '../images/mona.png';

const About = () => {
    return (
        <div className="about-container animate__animated animate__fadeIn">
            <div className="card">
                <div className="card-body cardHolder">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4 photoColumn">
                            <img className="img-fluid myPhoto" src={MyPhoto} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8 d-flex align-items-center">
                            <div className ="card">
                                <div className="card-body aboutMe">
                                    <h2>Hi, my name is Mona Randhawa...</h2>
                                    <p> I am a Sales Professional who is working towards pivoting my career into technology and innovation. I have several years of sales and customer service experience which have provided me the opportunity to work and learn from many different people around the world. In 2020, before Covid-19 brought the world to a halt, I started learning web development and discovered a newfound passion for UX / UI design!</p>

                                    <p> As an aspiring UX Designer and Frontend Developer, I am passionate about creating meaningful user experiences for solutions that address real world problems. I value innovation, creativity and lifelong learning. I enjoy working with people from various backgrounds and learning about our similarities and what makes us all unique. I’m eager to learn and I am committed to continuous growth and improvement. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
