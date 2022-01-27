import React from 'react';
import profileImg from "../../Assets/images/John Ripplinger.jpg";

function About() {
    return (
        <div className="row bg-light text-dark ml-4">
            <div className="col-12">
                <div className="col-4">
                <h3>About Me</h3>
                <img src={profileImg} className="img-thumbnail" id="profile-pic" alt="Profile pic" />
                </div>
                <p>Along with a passion for coding, I enjoy rock climbing, any team-based sport, and reading fantasy novels.  I was drawn to web development by the many influencers around me.  I have grown up in a home with a father who is a now retired CIO from Deseret Management and with three brothers that have enjoyed everything about technology. I found myself utilizing my excel coding skills in every aspect of life and realized that I wanted to code for a living and become a developer. I pursued a Bachelor's Degree in Database Administration but felt that it was lacking in providing me the coding experience I wanted.  I have since completed two IT Bootcamps for Web Development through DevMountain and U of U Trilogy Education. </p>
            </div>

            {/* <div className="col-6">
                
            </div> */}
        </div>
    )
}

export default About;
