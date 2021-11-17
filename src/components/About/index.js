import React, { useState } from 'react';
import profileImg from "../../Assets/images/John Ripplinger.jpg";

function About() {
    return (
        <div class="row bg-light text-dark ml-2">            
            <div class="col-3">
                <h3>About Me</h3>
                <img src={profileImg} className="img-thumbnail" id="profile-pic" alt="Profile pic" />
                <p>Along with a passion for coding, I enjoy rock climbing, any team-based sport, and reading fantasy novels.</p>
            </div>            
        </div>
    )
}

export default About;
