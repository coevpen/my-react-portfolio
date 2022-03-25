import React from 'react';

function Nav(props){
    const{
        pageSelected, 
        setPageSelected
    } = props;

    return (
        <nav>
            <ul className="nav justify-content-end">
                <li>
                    <div className="nav-item">
                        <span className="nav-link" onClick={() => setPageSelected("About")}>About Me</span>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <span className="nav-link" onClick={() => setPageSelected("Portfolio")}>Portfolio</span>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <span className="nav-link" onClick={() => setPageSelected("ContactForm")}>Contact Me</span>
                    </div>
                </li>
                <li>
                    <div className="nav-item">
                        <span className="nav-link" onClick={() => setPageSelected("Resume")}>Resume</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;