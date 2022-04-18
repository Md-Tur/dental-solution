import React from 'react';

const Blogs = () => {
    return (
        <div className='container justify-content-center mt-2'>
            <div>
                <h3>Authorization vs Authentication</h3>
                <div className='d-flex'>
                    <div>
                        <p>Authorization</p>
                        <ol>
                            <li>Authorization is a process where it's checked that user will be able access the resources or not.</li>
                            <li>By this process, user is validated.</li>
                            <li>It is done before Authentication.</li>
                        </ol>
                    </div>
                    <div>
                        <p>Authentication</p>
                        <ol>
                            <li>Authentication is a process where users identification is checked.</li>
                            <li>By this process, user is verified.</li>
                            <li>It is done before Authorization.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div>
                <h3>Why using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    Firebase: Firebase is used for many purposes like app development,grow and making qualityful apps.
                </p>
                <ol>
                    Authentication: There are various types of authentication system
                    <li>Two-factor authentication (2FA)</li>
                    <li>Token authentication</li>
                    <li>Biometric authentication and so on...</li>
                </ol>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <ol>
                    Firebase other services: Firebase provide us many services
                    <li>Hosting</li>
                    <li>Google Analytics</li>
                    <li>Cloud Storage</li>
                    <li>Cloud Functions</li>
                    <li>Cloud Firestore</li>
                    <li>Cloud Messaging and so on...</li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;