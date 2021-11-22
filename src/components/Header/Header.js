import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';

import "./Header.css";

const Header = () => {
    const [developers, setDevelopers] = useState([]);
    const [displayDevelopers, setDisplayDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const hamburgerIcon = <FontAwesomeIcon icon={faHamburger} />

    useEffect(() => {
        fetch('./developers.JSON')
        .then(res => res.json())
        .then(data => {
            setDevelopers(data);
            setDisplayDevelopers(data);
        } )
    }, []);

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedDevelopers = developers.filter(developer => developer.category.toLowerCase().includes(searchText.toLowerCase())) ;
        setDisplayDevelopers(matchedDevelopers);
    }
    //hire me button function
    const handleHireMe = developer => {
        const existDev = cart.find(dev => dev.name === developer.name);
        if(!existDev){
            const newCart = [...cart, developer];
            setCart(newCart);
        }
        else{
            alert('This Developer is Already Selected');
        }
    }
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
                        <input type="search" placeholder="Search Talent" className="nav-search" onChange={handleSearch} />
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

            <div className="developer-container">
                <div className="developer-details">
                    {
                        displayDevelopers.map(developer => <Developer key={developer.key} developer={developer} handleHireMe={handleHireMe} ></Developer> )
                    }
                </div>
                

                {/* cart component */}
                <div className='mt-4 cart-container'>
                    <Cart cart={cart} ></Cart>
                </div>
            </div>

        </div>
    );
};

export default Header;