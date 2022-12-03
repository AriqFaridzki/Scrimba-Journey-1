import React from 'react';
import ReactLogo from '../assets/react.svg'


function Header() {
    return ( 
    <>
          <header>
            <nav className="nav">
                <div className='nav-logo'>
                    <img src={ReactLogo} className="nav-logo" />
                    <p>ReactFacts</p>
                </div>

                <ul className="nav-items">
                    <li>React Course - </li>
                    <li>Project 1</li>
                </ul>

            </nav> 
        </header>
    
    </> 
    );
}

export default Header;