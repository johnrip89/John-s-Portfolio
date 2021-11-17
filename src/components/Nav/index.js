import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {   

    return (
        <div class="col-7">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Resume</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;