import React from 'react';
import profileImg from "../../Assets/images/John Ripplinger.jpg";
import { capitalizeFirstLetter } from '../../utils/helpers';
import Nav from '../Nav';

function Header() {    

    return (
        <header class="container-fluid">
            <div class="row bg-dark text-white">
                <div class="col-2">
                    <img src={profileImg} className="img-thumbnail" id="profile-pic" alt="Profile pic" />
                </div>
                <div class="col-3">
                    <h3>John Ripplinger's Portfolio</h3>
                </div>
                <Nav></Nav>
            </div>
        </header>
    );
}

export default Header;