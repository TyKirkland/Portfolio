import React from "react";
import './ProjectsPage.css';
import './ProjectsPageMediaQueries.css';

function ProjectsPage() {
    return (
        <div className="projects_page">
            <h2 className="project1_title">Chess</h2>
            <div className="project1">
                <a className="project1_link" href="https://tykirkland.github.io/Project-1/" target="_blank">
                    <img className="project1_photo" src={process.env.PUBLIC_URL + '/ChessScreenShot.png'} alt="Chess Photo"></img>
                </a>
                <div className="project1_text">
                    <div className="project1_text1">This is the classic game of chess! Allowing you to play a legal moves only match locally against yourself or an opponent.</div>
                    <br></br>
                    <div className="project1_text2">This was the first app I ever created, it was made using Vanilla Javascript, CSS, and HTML. By utilizing DOM manipulation I was able to keep track of the state of the board, manage the pieces, and output the correct limitations for each piece.</div>
                    <br></br>
                    <div className="project1_text3">My favorite parts of this app were figuring out how to make the pieces pinnable so they cannot move if they are protecting the king, checkmate, and castling functionality.</div>
                    <br></br>
                    <div className="links">
                        <a className="live_link1" href="https://tykirkland.github.io/Project-1/" target="_blank">Live Link</a>
                        <a className="github_link1" href="https://github.com/TyKirkland/Project-1.git" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <h2 className="project2_title">EZEmployees</h2>
            <div className="project2">
                <div className="project2_text">
                    <div className="project2_text1">EZEmployees is an employee scheduling application for managers and business owners to easily and effectively create an account, workplaces, employees and shifts!</div>
                    <br></br>
                    <div className="project2_text2">Every aspect of this app has full CRUD functionality so you are able to completely control all parts of your account.</div>
                    <br></br>
                    <div className="project2_text3">It was made using Javascript, CSS, HTML, EJS, Node, Express and MongoDB.</div>
                    <br></br>
                    <div className="links">
                        <a className="live_link2" href="https://ezemployees.onrender.com/" target="_blank">Live Link</a>
                        <a className="github_link2" href="https://github.com/TyKirkland/EZEmployees" target="_blank">GitHub</a>
                    </div>
                </div>
                <a className="project2_link" href="https://ezemployees.onrender.com/" target="_blank">
                    <img className="project2_photo" src={process.env.PUBLIC_URL + '/EZEmployeesScreenShot.png'} alt="EZEmployees Photo"></img>
                </a>
            </div>
            <hr></hr>
            <h2 className="project3_title">Echo</h2>
            <div className="project3">
                <a className="project3_link" href="https://teampro3-front.onrender.com/" target="_blank">
                    <img className="project3_photo" src={process.env.PUBLIC_URL + '/EchoScreenShot.png'} alt="Echo Photo"></img>
                </a>
                <div className="project3_text">
                    <div className="project3_text1">Echo is a video library application that utilizes full CRUD functionality to allow the user to create an account, create categories, store videos by searching for them from an API and sort the videos using either the categories or the sort by button.</div>
                    <br></br>
                    <div className="project3_text2">I created this full-stack application using React, Express, MongoDB, and Node.js.</div>
                    <br></br>
                    <div className="links">
                        <a className="live_link3" href="https://teampro3-front.onrender.com/" target="_blank">Live Link</a>
                        <a className="github_link3" href="https://github.com/jotavo13/TEAM_PRO_3" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <h2 className="project4_title">Battle Arena</h2>
            <div className="project4">
                <div className="project4_text">
                    <div className="project4_text1">This is a Battle Arena type of application that allows the user to create characters, weapons, armor and spells with fully customizable stats. You can then equip the characters with the weapons, armor and if they are a mage, spells.</div>
                    <br></br>
                    <div className="project4_text2">After fully customizing the characters you can pit them against each other in a text-based fight that uses each stat to dynamically fight with each other until there is one winner.</div>
                    <br></br>
                    <div className="project4_text3">I created this full-stack application using Django, Python, HTML, CSS and SQL databases.</div>
                    <br></br>
                    <div className="links">
                        <a className="live_link4" href="https://battle-arena.onrender.com/" target="_blank">Live Link</a>
                        <a className="github_link4" href="https://github.com/TyKirkland/Capstone_Project" target="_blank">GitHub</a>
                    </div>
                </div>
                <a className="project4_link" href="https://battle-arena.onrender.com/" target="_blank">
                    <img className="project4_photo1" src={process.env.PUBLIC_URL + '/BattleArenaScreenShot1.png'} alt="BattleArena Photo"></img>
                </a>
            </div>
            <a className="project4_link" href="https://battle-arena.onrender.com/" target="_blank">
                <img className="project4_photo2" src={process.env.PUBLIC_URL + '/BattleArenaScreenShot2.png'} alt="BattleArena Photo"></img>
            </a>
        </div>
    )
}

export default ProjectsPage