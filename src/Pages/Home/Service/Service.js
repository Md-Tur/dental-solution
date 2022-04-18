import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (

        <div style={{ position: 'relative' }} className='col col-md-1 col-lg-4'>
            <div>
                <div className='d-flex justify-content-center'>
                    <img style={{ height: "200px", width: "350px" }} src={img} alt="" />
                </div>
                <div>
                    <h2> {name} </h2>
                    <p>Price: {price} </p>
                    <p><small> {description} </small></p>
                </div>
                <div style={{ bottom: '0' }} className='d-flex justify-content-center'>
                    <Link to='/appoinments'>
                        <button className='btn btn-primary'>Take Apoinment: {name} </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;