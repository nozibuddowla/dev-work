import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers,setDevelopers] = useState([]);
    const [cart, setCart] = useState([])
    const userIcon = <FontAwesomeIcon icon={faUser} />
    useEffect(() => {
        fetch('./developers.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    }, []);

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

    // total developer hire cost
    let total = 0;
    for (const developer of cart) {
        total =+ developer.rate;
    }

    return (
        <div>
            <div className="developer-container">
                <div className="developer-details">
                    {
                        developers.map(developer => <Developer key={developer.key} developer={developer} handleHireMe={handleHireMe} ></Developer> )
                    }
                </div>
                

                {/* cart component */}
                <div className='mt-4 cart-container sticky-top'>
                    <h4>
                        <span className='icon'>{userIcon}</span> Developer Added: 
                        <span className='color'>{cart.length}</span>
                    </h4>
                    <h5 className='ms-4'>Total Cost: <span className='color'>{total}</span></h5>
                    {
                        cart.map(developer => <Cart 
                            key={developer.profession}
                            developer={developer}></Cart> )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Developers;