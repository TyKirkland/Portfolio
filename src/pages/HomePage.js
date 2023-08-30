import React from "react";
import './HomePage.css';

function HomePage() {
    return (
        <div className="home">
            <h1>Ty Kirkland</h1>
            <div className="home_content">
                {/* <div className="skills">
                    <h5>Skills:</h5>
                </div> */}
                <img className="photo" src={process.env.PUBLIC_URL + '/PlaceHolderPhoto.png'} alt="Photo of Ty"></img>
                {/* <div className="skills">
                    <h5>Soft Skills:</h5>
                    <br></br>
                    <div>Communication</div>
                </div> */}
            </div>
            <h3>Software Engineer</h3>
        </div>
    )
}

export default HomePage