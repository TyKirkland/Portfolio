import React from "react";
import './ProjectsPage.css';

function ProjectsPage() {
    return (
        <div className="projects_page">
            <h2 className="project1_title">Chess</h2>
            <div className="project1">
                <img className="project1_photo" src={process.env.PUBLIC_URL + '/ChessScreenShot.png'} alt="ChessPhoto"></img>
                <div className="project1_text">
                    <div className="project1_text1">This is the classic game of chess! Allowing you to play a legal moves only match locally against yourself or an opponent.</div>
                    <br></br>
                    <div className="project1_text2">This was the first app I ever created, it was made using Vanilla Javascript, CSS, and HTML. By utilizing DOM manipulation I was able to keep track of the state of the board, manage the pieces, and output the correct limitations for each piece.</div>
                    <br></br>
                    <div className="project1_text3">My favorite parts of this app were figuring out how to make the pieces pinnable so they cannot move if they are protecting the king, checkmate, and castling functionality.</div>
                    <br></br>
                    <a className="project1_link" href="https://tykirkland.github.io/Project-1/" target="_blank">Live Link</a>
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
                    <a className="project2_link" href="https://ezemployees.onrender.com/" target="_blank">Live Link</a>
                </div>
                <img className="project2_photo" src={process.env.PUBLIC_URL + '/EZEmployeesScreenShot.png'} alt="EZEmployeesPhoto"></img>
            </div>
            <hr></hr>
            <h2 className="project3_title">Echo</h2>
            <div className="project3">
                <img className="project3_photo" src={process.env.PUBLIC_URL + '/EchoScreenShot.png'} alt="EchoPhoto"></img>
                <div className="project3_text">
                    <div className="project3_text1">Echo is a video library application that utilizes full CRUD functionality to allow the user to create an account, create categories, store videos by searching for them from an API and sort the videos using either the categories or the sort by button.</div>
                    <br></br>
                    <div className="project3_text2">I created this full-stack application using React, Express, MongoDB, and Node.js.</div>
                    <br></br>
                    <a className="project3_link" href="https://teampro3-front.onrender.com/" target="_blank">Live Link</a>
                </div>
            </div>
            <hr></hr>
            <h2 className="project4_title">Battle Arena</h2>
            <div className="project4">
                <div className="project4_text">
                    <div className="project4_text1">This is a Battle Arena type of application that allows the user to create characters, weapons, armor and spells with fully customizable stats. You can then equip the characters with the weapons, armor and if they are a mage, spells. After fully customizing the characters you can pit them against each other in a text-based fight that uses each stat to dynamically fight with each other until there is one winner.</div>
                    <br></br>
                    <div className="project4_text2">I created this full-stack application using Django, Python, HTML, CSS and SQL databases.</div>
                    <br></br>
                    <a className="project4_link" href="https://teampro3-front.onrender.com/" target="_blank">Live Link</a>
                </div>
                <img className="project4_photo1" src={process.env.PUBLIC_URL + '/BattleArenaScreenShot1.png'} alt="BattleArenaPhoto"></img>
            </div>
            <img className="project4_photo2" src={process.env.PUBLIC_URL + '/BattleArenaScreenShot2.png'} alt="BattleArenaPhoto"></img>
        </div>
    )
}

export default ProjectsPage