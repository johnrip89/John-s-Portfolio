import React from 'react';
import Nav from '../Nav';

function Header(props) {    

    return (
        <header className="container-fluid mb-4 wrapper">
            <div className="row bg-dark text-white">                
                <div className="col-3">
                    <h3>John Ripplinger's Portfolio</h3>
                </div> 
                {props.children}               
            </div>            
        </header>
    );
}

export default Header;