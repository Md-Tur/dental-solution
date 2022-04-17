import React from 'react';
import developer from '../../images/developer.png';

const About = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary mt-2 mb-2'>About Developer</h2>

            <h4 className='text-center'>Developer: Md Tur Ibna Mostafiz</h4>
            <div className='d-flex'>
                <div className='me-3'>
                    <img style={{ height: '200px' }} src={developer} alt="" />
                </div>
                <div className='d-flex align-items-center'>
                    <p>Goal: My first goal is to complete this course successfully. I want to be a full stack junior developer from here. Will build my carrier on it and want to work hard and sincerely so that i can make my postion more better than now as a web developer.</p>
                </div>
            </div>
        </div>
    );
};

export default About;