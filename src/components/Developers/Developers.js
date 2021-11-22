import React, { useEffect, useState } from 'react';

import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
    const [developers,setDevelopers] = useState([]);
    const [cart, setCart] = useState([])
    
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


    return (
        <div>
            <div className="developer-container">
                <div className="developer-details">
                    {
                        developers.map(developer => <Developer key={developer.key} developer={developer} handleHireMe={handleHireMe} ></Developer> )
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

export default Developers;