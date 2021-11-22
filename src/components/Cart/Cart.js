import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = (props) => {
    const {name, location image, rate} = props.developer;
    const mapMarkerIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
    return (
        <div>
            <div className="w-100 sigle-dev">
                <div >
                    <h1> {name} </h1>
                    <span> {mapMarkerIcon} {location} </span>
                    <p>Rate: $ {rate}/hr </p>
                </div>
                <div><img src={image} alt="" className='dev-image' /></div>
            </div>
        </div>
    );
};

export default Cart;