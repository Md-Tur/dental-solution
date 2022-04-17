import React from 'react';
import { Link } from 'react-router-dom';

const Appoinments = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-2'>Make sure your appoinments</h2>
            <p className='text-info text-center'>You are one step left from appoinments confirmation</p>
            <div className='d-flex justify-content-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Confirm Appoinment</button>
                </Link>
            </div>
        </div>
    );
};

export default Appoinments;