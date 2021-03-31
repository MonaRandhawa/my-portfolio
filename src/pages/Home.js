import React from 'react';
import "./Home.css";
import MyAvtar from "../images/mona1.svg";
import Blob from "../images/blob.svg";
import HeroButtons from "../components/HeroButtons"

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row hero">
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="heroContainer">
                        <header>
                            <h1 className="myName">Hello,</h1>
                            <h1 className="myName">I'm Mona Randhawa</h1>
                            <h2 className="myTitle">Full Stack Developer | Lifelong Learner</h2>
                            <p className="quirkyQuote">Using critical thinking, problem-solving and little bit of coding magic to bring my ideas to life</p>
                            <div className="btn-group">
                                <HeroButtons
                                    value="LinkedIn"
                                    styleClass="btn-lg btn-primary"
                                />
                                <HeroButtons
                                    value="Twitter"
                                    styleClass="btn-lg btn-primary"
                                />
                                <HeroButtons
                                    value="GitHub"
                                    styleClass="btn-lg btn-primary"
                                />
                            </div>
                        </header>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                    <img className="heroImage img-fluid" src={MyAvtar} alt="my-avtar" />
                    <img className="heroImageBlob img-fluid" src={Blob} alt="blob" />
                </div>
            </div>
        </div>
    )
}

export default Home
