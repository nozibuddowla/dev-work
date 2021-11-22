import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import SingleDev from '../../singleDev/SingleDev';
const Cart = (props) => {
    const {cart} = props;
    const userIcon = <FontAwesomeIcon icon={faUser} />
    

    // total hire amount and dev name
    let total = 0;
    let developerName = [];
    for (const developer of cart) {
        total = total + developer.rate;
        developerName.push(developer);
    }
    return (
        <div>
            <h4>
                <span className='icon'>{userIcon}</span> Developer Added: 
                <span className='color'>{cart.length}</span>
            </h4>
            <h5 className='ms-4'>Total Cost: <span className='color'> $ {total}</span></h5>
            {
                developerName.map(developer => <SingleDev 
                    key={developer.key}
                    developer={developer}></SingleDev> )
            }
        </div>
    );
};

export default Cart;