import React from 'react';

function Nav(props) {    
    const {        
        setContactSelected,        
        setProjectsSelected,        
        setResumeSelected,
    } = props;   

    return (
        <div className="col-7">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" onClick={() => {setContactSelected(false); setResumeSelected(false); setProjectsSelected(false);}}>About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => {setContactSelected(true); setResumeSelected(false); setProjectsSelected(false);}}>Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => {setContactSelected(false); setResumeSelected(false); setProjectsSelected(true);}}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => {setContactSelected(false); setResumeSelected(true); setProjectsSelected(false);}}>Resume</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;