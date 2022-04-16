import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>This is service:  {name} </h2>
            <p>Details: {description} </p>
            <p><small>Price: {price} </small></p>
        </div>
    );
};

export default Service;