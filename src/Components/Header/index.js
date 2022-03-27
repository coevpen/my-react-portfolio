import React from 'react';
import Nav from './Nav';

function Header(props){
    const {pageSelected, setPageSelected} = props;

    return (
        <header>
            <div className="header-titles">
                <h1 className="title">
                    Courtney Evins
                </h1>
                <h4 className="subtitle">
                    Software Engineer
                </h4>
            </div>
            <Nav 
            pageSelected={pageSelected}
            setPageSelected={setPageSelected}
            />
      </header>
    );
}

export default Header;