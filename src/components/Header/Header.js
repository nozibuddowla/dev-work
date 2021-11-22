import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const hamburgerIcon = <FontAwesomeIcon icon={faHamburger} />
    return (
        <div className="header">
            <nav className="main-nav">
                {/* 1st logo part */}
                <div className="logo">
                    <a href="#">
                        <h2>
                            <span>D</span>ev
                            <span>W</span>ork
                        </h2>
                    </a>
                </div>
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li><a href="/talent">Find Talent</a></li>
                        <li><a href="/work">Find Work</a></li>
                        <li><a href="/devWork">Why Dev Work</a></li>
                        <li><a href="/enterprise">Enterprise</a></li>
                    </ul>
                </div>
                {/* 3rd search input */}
                <div className="search-bar">
                    <form action="">
                        <input type="search" placeholder="Search Talent" className="nav-search" />
                    </form>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}> {hamburgerIcon} </a>
                    </div>
                </div>
            </nav>

            <div className='container header-title my-5 text-center text-white'>
                <h1>Hire the best Web developers</h1>
                <p>Get to know top Web developers. And say hello to the newest member of your team.</p>
                <button className="btn-default rounded-pill">Get Started</button>
                <button className="btn-outline rounded-pill">Talk to a Recruiter</button>
            </div>
        </div>
    );
};

export default Header;