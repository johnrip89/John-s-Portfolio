import React from 'react';

// https://stackoverflow.com/questions/40515142/how-to-make-a-sticky-footer-in-react
const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

function Projects() {
    return (
        <footer style={style} id="contact" className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <a href="https://github.com/johnrip89">GitHub</a>
                    </div>
                    <div className="col-3">
                        <a href="https://www.facebook.com/john.c.ripplinger">Facebook</a>
                    </div>
                    <div className="col-3">
                        <a href="https://www.linkedin.com/in/john-ripplinger-4714315b/">LinkedIn</a>
                    </div>
                    <div className="col-3">
                        <a href="mailto:lebronjohn89@gmail.com">Email Me</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Projects;