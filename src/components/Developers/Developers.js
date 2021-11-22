import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import './Developers.css';

const Developers = () => {
    const [developers,setDevelopers] = useState([]);
    const [cart, setCart] = useState([])
    const userIcon = <FontAwesomeIcon icon={faIcons} />
    useEffect(() => {
        fetch('./developers.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    }, []);

    return (
        <div>
            <div className="developer-container">
                <div className="developer-details">
                    {
                        developers.map(developer => <Developer key={developer.key} developer={developer} ></Developer> )
                    }
                </div>
                

                {/* cart componenet */}
                <div className='mt-4 cart-container sticky-top'>
                    <h4>
                        <span className='icon'>{userIcon}</span> Developer Added: 
                        <span className='color'>{cart.length}</span>
                    </h4>
                    <h5 className='ms-4'>Total Cost :- <span className='color'>{total}</span></h5>
                    {
                        cart.map(programmer => <Cart 
                            key={programmer.profession}
                            programmer={programmer}></Cart> )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Developers;