import React from "react";
import './AboutPage.css';
import './AboutPageMediaQueries.css';

function AboutPage() {
    return (
        <div className="about_page">
            <div className="intro_section">
                <div className="text_div">
                    <h1>Hi... I'm Ty</h1>
                </div>
                <img className="aboutpage_photo1" src={process.env.PUBLIC_URL + '/PersonalPhoto.png'} alt="Photo of Ty"></img>
                <h4 className="text1">I am a highly competitive and passionate software engineer who loves complicated problems, critical thinking, and technology.</h4>
            </div>
            <hr></hr>
            <div className="skills_section">
                <img className="python_logo" src={process.env.PUBLIC_URL + '/PythonLogo.png'} alt="Python Logo"></img>
                <img className="javascript_logo" src={process.env.PUBLIC_URL + '/JavascriptLogo.png'} alt="Javascript Logo"></img>
                <h1>Skills</h1>
                <br></br>
                <h3>Languages:</h3>
                <div>JavaScript, HTML, CSS, Python, and EJS</div>
                <br></br>
                <h3>Databases:</h3>
                <div>Mongo, SQL and JSON API's</div>
                <br></br>
                <h3>Libraries and Frameworks:</h3>
                <div>React, Django, ExpressJS, NodeJS, Bootstrap and Jquery</div>
            </div>
            <hr></hr>
            <div className="background_section">
                <h1 className="background_section_title">Background</h1>
                <div className="background_section1">
                    <div className="background_section1_text">
                        I am an enthusiastic software engineer from the charming small town of Lugoff, South Carolina, where I spent my early years on a farm, far removed from the touch of technology. But even amidst the tranquility of rural life, I found my heart drawn to its pulsating beat. However, my journey into the world of software engineering was an unexpected one.
                    </div>
                    <img className="aboutpage_photo2" src={process.env.PUBLIC_URL + '/FarmPhoto2.png'} alt="Farm"></img>
                </div>
                <div className="background_section2">
                    <img className="aboutpage_photo3" src={process.env.PUBLIC_URL + '/GraduationPhoto5.png'} alt="Photo of Ty"></img>
                    <div className="background_section2_text">
                        After graduating from college with a degree in public health, I embarked on a path that led me to the South Carolina Department of Administration, Division of Technology Operations, where I started as an Intern. Little did I know that this experience would be a turning point in my life. During my time at the Division of Technology Operations, I found myself responsible for overseeing and maintaining critical software systems. It was here that I fell head over heels in love with the world of software development.
                    </div>
                </div>
                <div className="background_section3">
                    <div className="background_section3_text">
                        The process of crafting elegant, efficient code and solving complex problems ignited a spark within me. As I delved deeper into the intricacies of software engineering, I knew I had discovered my true calling. I made the life-altering decision to commit myself wholeheartedly to this newfound passion. Eager to bridge the gap between my background in public health and my newfound love for software, I embarked on a journey of education and transformation. I enrolled in a rigorous Software Engineering boot camp with General Assembly, where I honed my skills, expanded my knowledge, and forged meaningful connections within the tech community. It was a challenging yet rewarding experience that solidified my dedication to this dynamic field.
                    </div>
                    <img className="aboutpage_photo4" src={process.env.PUBLIC_URL + '/GALogo.png'} alt="Photo of Ty"></img>
                </div>
                <div className="background_section4">
                    <img className="aboutpage_photo5" src={process.env.PUBLIC_URL + '/GraduationPhoto9.jpeg'} alt="Photo of Ty"></img>
                    <div className="background_section4_text">
                        Today, I stand before you as a graduate, armed with the determination to leverage technology for the betterment of society. Join me as I continue to explore the limitless possibilities that software engineering offers. Together, let's build innovative solutions that make a meaningful impact on the world. The future is digital, and I'm excited to be a part of it!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage