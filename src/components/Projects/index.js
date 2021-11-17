import React from 'react';

function Projects() {
    return (
        <main>
            <section id="projects" class="container">
                <div class="row bg-dark">
                    <div class="card col-3">
                        <a href="https://johnrip89.github.io/Password-Generator/">
                            <img src={require(`../../Assets/images/Generate-Password.png`).default}
                                class="card-img-top" alt="" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Password Generator</h5>
                            <p class="card-text">Set requirements and automatically generate a random password.</p>
                            <a href="https://johnrip89.github.io/Password-Generator/">click here.</a>
                        </div>
                    </div>
                    <div class="card col-6">
                        <a href="https://johnrip89.github.io/Group-Project-Fantastic-4/">
                            <img src={require(`../../Assets/images/Whos-the-best.png`).default}
                                class="card-img-top" alt="" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Who's the Best</h5>
                            <p class="card-text">Compare stats of NBA players to make your arguement of who is better.</p>
                            <a href="https://johnrip89.github.io/Group-Project-Fantastic-4/">click here.</a>
                        </div>
                    </div>
                    <div class="card col-3">
                        <a href="https://johnrip89.github.io/Horiseon/">
                            <img src={require(`../../Assets/images/digital-marketing-meeting.jpg`).default} class="card-img-top" alt="" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Horiseon</h5>
                            <p class="card-text">A website for a company that provides services to boost online efficency.</p>
                            <a href="https://johnrip89.github.io/Horiseon/">click here.</a>
                        </div>
                    </div>
                </div>
                <div class="row bg-dark">
                    <div class="card col-3">
                        <a href="https://johnrip89.github.io/run-buddy/">
                            <img src={require(`../../Assets/images/hero-bg.jpg`).default} class="card-img-top" alt="" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Run Buddy</h5>
                            <p class="card-text">A website for a company that provides person trainers.</p>
                            <a href="https://johnrip89.github.io/run-buddy/">click here.</a>
                        </div>
                    </div>
                    <div class="card col-3">
                        <a href="https://johnrip89.github.io/git-it-done/">
                            <img src={require(`../../Assets/images/github.png`).default}
                                class="card-img-top" alt="" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Git-it-done</h5>
                            <p class="card-text">A website that searches repositories in github and shows outstanding issues.
                            </p>
                            <a href="https://johnrip89.github.io/git-it-done/">click here.</a>
                        </div>
                    </div>
                    <div class="card col-3">
                        <a href="https://dnd-character-sheet-manager.herokuapp.com/login">
                            <img src={require(`../../Assets/images/124807.jpg`).default}
                                class="card-img-top" alt="" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">D&D Game Manager</h5>
                            <p class="card-text"></p>
                            <a href="https://dnd-character-sheet-manager.herokuapp.com/login">click here.</a>
                        </div>
                    </div>
                    <div class="card col-3">
                        {/* <img src={require(`../../Assets/images/Generate-Password.png`).default}
                            class="card-img-top" alt="" /> */}
                        <div class="card-body">
                            <h5 class="card-title">Coming soon...</h5>
                            <p class="card-text"></p>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Projects;