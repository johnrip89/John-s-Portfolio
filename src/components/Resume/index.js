import React from 'react';

function Resume() {
    return (
        <div className="row bg-light text-dark ml-2">
            <div className="col-5">
                <h3>Resume</h3>
                <a>Download my resume</a>
                <h4>Front-End Experience</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Materialize</li>
                    </ul>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>Handlebars</li>
                    <li>React.js</li>
                    <ul>
                        <li>react-big-calendar</li>
                        <li>react-datetime-picker</li>
                    </ul>
                </ul>
                <h4>Back-End Experience</h4>
                <ul>
                    <li>API</li>
                    <li>Express.js</li>
                    <li>Sequelize</li>
                    <li>MySql</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;