import React from 'react';
import Projects from "../components/Projects";
import "./AllProjects.css";
import MemorylandPlay from "../images/ml-play.png";
import MemorylandHome from "../images/ml-home.png";
import MemorylandCards from "../images/ml-cards.png";
import Robofriends1 from "../images/rb-1.png";
import Robofriends2 from "../images/rb-2.png";
import BgGenerator1 from "../images/bg-1.png";
import BgGenerator2 from "../images/bg-2.png";
import BgGenerator3 from "../images/bg-3.png";
import ParkedIn1 from "../images/pi-1.png";
import ParkedIn2 from "../images/pi-2.png";
import VisualThinking1 from "../images/strategy.png";
import VisualThinking2 from "../images/journey.png";
import VisualThinking3 from "../images/icons.png";

const AllProjects = () => {
    return (
        <div className="project-container animate__animated animate__fadeIn">
            <div className="card">
                <div className="card-body cardHolder">
                    <div className="row">
                        <div className="col sectionTitle">
                            <h1>
                                Projects
                            </h1>
                        </div>
                    </div>

                    <div className="row">
                    <Projects
                            name="Memoryland"
                            screen1={MemorylandHome}
                            screen2={MemorylandPlay}
                            screen3={MemorylandCards}
                            projectDescriptionIntro="For my final project at EvolveU, I worked in a team with 3 fellow developers to create an interactive and customizable flip card game for children ages 4+."
                            projectDescriptionProcess="As parents, we wanted to create a game for children that helped to improve their cognitive skills. After doing research, we decided to create a Montesorri inspired flip card game that would allow children to build visual memory, concentration, and improve their ability to find similarities and differences between objects. For our theme, we opted for bright and vibrant colours that appealed to a younger audience. We created preselected categories such as Animals, Shapes, Letters and Colours, and also included a custom category that allowed parents to upload their own images or photos that appealed to their children. "
                            projectDescriptionSolution="While working on this project, I brainstormed different ideas on where to display our parent dashboard. One of the challenges we faced was trying to figure out the flow of our application and how to give children the opportunity to play with preselected categories without having to wait for a parent to upload photos. I decided to add a “play” button on our homepage so that children could be directed to the main play page without needing to login. If the children wanted to play with custom images, their parent’s would need to login and upload images through the parent dashboard. We settled on this option because we did not want to allow children access to the photo uploading capabilities. As this game was meant to be played on a desktop or tablet, we did not want children to accidentally upload sensitive information that might be stored on their parent’s devices (i.e. pictures of a passport, or tax return). Another portion of the game that I worked on was the game logic. Using JavaScript and React state hooks, I created functions that evaluated when two cards had been flipped, if they were match, and which cards were “solved”. "

                        />
                        <Projects
                            name="ParkedIn"
                            screen1={ParkedIn1}
                            screen2={ParkedIn2}
                            projectDescriptionIntro="For my second project at EvolveU, I worked on a development team with 3 peers to create ParkedIn - a parking application for the Lake Louise Area."
                            projectDescriptionProcess="Due to high volumes of traffic and gridlock in an already sensitive ecosystem, we wanted to create an application that would allow users to quickly view the number of available parking stalls in Lake Louise at any given time. With the current setup, vistors don't have access to this information and are often left idling, circling around, or stalled in traffic."
                            projectDescriptionSolution="We created a web based application with two interfaces; one for visitors to the area and the another for ground parking attendants who would be able to update the number of stalls available in real time. For this project, I worked on the interface which was accessed by our end users. Keeping in mind that visitors would access this website through their smartphones, I created a mobile responsive design with a clean interface. For each parking lot, I included the number of parking stalls available, parking rates, features and hours. I also included a Google Maps API to show the location of each parking lot within the area."
                        />
                        <Projects
                            name="Visual Thinking Intensive"
                            screen1={VisualThinking1}
                            screen2={VisualThinking2}
                            screen3={VisualThinking3}

                            projectDescriptionIntro="I was fortunate to take a 6-week immersive Visual Thinking Intensive to build my visual thinking skills. With 18 hours in total, I learned  how to practice drawing, sketching and visualization within software development."
                            projectDescriptionSolution="I focused on creating large scale visuals on flip charts and whiteboards, and also learned how to create wireframes for product development lifecycles. I learned how to add colour to visualizations using different mediums, capture information in a live setting (i.e. meetings, client conversations), create mobile elements for interactive experiences and create low-fidelity prototypes."
                        />
                        <Projects
                            name="Robofriends"
                            screen1={Robofriends1}
                            screen2={Robofriends2}
                            projectDescriptionIntro="Robofriends is the first React application I created while studying The Complete Web Developer in 2020: Zero To Mastery program on Udemy. I was able to learn how to create a frontend application that pulled from a existing API to display information to the end user. This application also has a search feature that allows the user to filter through the list of displayed robots."
                        />
                        <Projects
                            name="Background Generator"
                            screen1={BgGenerator1}
                            screen2={BgGenerator2}
                            screen3={BgGenerator3}
                            projectDescriptionIntro="While learning HTML, CSS and JavaScript, I created this Background Gradient Generator. Users are able to either select two colours of their choice, or With a click of a button, have to colours randomly generate for them. Once the colours are selected, the background gradient changes to those colours and provides the user with the CSS code required to display the colour gradient."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProjects
