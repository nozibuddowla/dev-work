import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import './SingleDev.css';
const SingleDev = (props) => {
    const {name, location, rate, image} = props.developer;
    const mapMarkerIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
    return (
        <div>
            <div className="w-100 single-dev">
                <div >
                    <h4> {name} </h4>
                    <span> {mapMarkerIcon} {location} </span>
                    <p>Rate: $ {rate}/hr </p>
                </div>
                <div><img src={image} alt="" className='dev-image' /></div>
            </div>
        </div>
    );
};

export default SingleDev;