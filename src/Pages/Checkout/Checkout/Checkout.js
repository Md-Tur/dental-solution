import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div>
            <h2>Please checkout here</h2>
            <div className='text-center'>
                <Link to='/home'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;