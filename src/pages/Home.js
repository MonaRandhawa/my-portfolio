import React from 'react';
import "./Home.css";
import MyAvtar from "../images/HeroImage.svg";
import HeroButtons from "../components/HeroButtons"

const Home = () => {

    const getLinkedIn = () => {
        return window.open("https://www.linkedin.com/in/mona-randhawa2021/");
    }

    const getTwitter = () => {
        return window.open("https://twitter.com/MonaRandhawa");
    }

    const getGithub = () => {
        return window.open("https://github.com/MonaRandhawa");
    }

    return (
        <div className="container-fluid">
            <div className="row hero">
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center py-3">
                    <div className="heroContainer animate__animated animate__fadeInLeft">
                        <header>
                            <h1 className="myName">Mona Randhawa</h1>
                            <h2 className="myTitle">
                                Designer • Developer • Lifelong Learner
                            </h2>
                        </header>
                        <p className="quirkyQuote">Based out of Calgary, AB, I'm currently learning UX / UI Design and Full Stack Development. I enjoy using critical thinking, problem-solving and little bit of coding magic to bring my ideas to life
                        </p>
                        <div className="btn-group">
                            <HeroButtons
                                styleClass="heroButton linkedin button-image"
                                onClick={getLinkedIn}
                            />
                            <HeroButtons
                                styleClass="heroButton twitter button-image"
                                onClick={getTwitter}
                            />
                            <HeroButtons
                                styleClass="heroButton github button-image"
                                onClick={getGithub}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center py-3 animate__animated animate__fadeInRight">
                    <img className="heroImage img-fluid" src={MyAvtar} alt="my-avtar" />
                </div>
            </div>
        </div>
    )
}

export default Home
