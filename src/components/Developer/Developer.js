import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Developer.css';


const Developer = (props) => {
    const {star, image, name, location, total_jobs, profession, category, rate} = props.developer;
    const starIcon = <FontAwesomeIcon icon={faStar} />
    const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />
    return (
        <div>
            <div className="card dev-info p-3">
                <div className="position-relative">
                    <div className="text-center">
                        <div className="mb-3">
                            <figure>
                                <img src={image} alt="" className="fl-avator" />
                            </figure>
                        </div>
                        <div className="fl-hourly-rate position-absolute">
                            <span className="fw-bold">${rate}/hr</span>
                        </div>
                    </div>
                    <div className="card-body mb-1 text-center">
                        <a href="#"className="d-inline-block align-middle mb-3 mb-lg-0">
                            <h2 className="card-title mb-0">{name}</h2>
                        </a>
                        <p> {location} </p>
                        <p className="mb-0"> {profession}, {category} </p>
                        <div className="fl-rating">
                            <div className="up-icon">
                                <span> {starIcon}  </span>
                                
                            </div>
                            <strong className="mx-2 vertical-align-top">{star}/5</strong>
                            <span className="text-secondary vertical-align-top" > ({total_jobs} jobs) </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="collapsable-block-bottom mt-3 text-center">
                        <button className="btn-default rounded-pill me-0 py-2 px-4" >
                            {plusIcon} <span>Hire me</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;