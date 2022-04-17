import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2> {name} </h2>
            <p>Price: {price} </p>
            <p><small> {description} </small></p>
            <Link to='/checkout'>
                <button>Take Apoinment here: {name} </button>
            </Link>
        </div>
    );
};

export default Service;