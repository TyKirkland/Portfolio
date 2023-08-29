import React from "react";
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact_page">
            <h1 className="contact_title">Get in touch!</h1>
            <h4>Send me an email anytime at:</h4>
            <div className="contact_email">ty.kirkland001@gmail.com</div>
            <div className="contact_logos">
                <h4>Connect with me</h4>
                <a href="https://github.com/TyKirkland" target="_blank">
                    <img className="github_logo" src={process.env.PUBLIC_URL + '/GithubLogo.png'} alt="Photo of Ty"></img>
                </a>
                <a href="https://www.linkedin.com/in/ty-kirkland/" target="_blank">
                    <img className="linkedin_logo" src={process.env.PUBLIC_URL + '/LinkedInLogo.webp'} alt="Photo of Ty"></img>
                </a>
            </div>
        </div>
    )
}

export default ContactPage