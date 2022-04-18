import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='w-75 mx-auto border p-4 mt-4 bg-white'>
                <h3>Q:Difference between authorization and authentication?</h3>
                <p className='fs-5'><strong>Authentication:</strong>Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.Authentication is visible to and partially changeable by the user.</p>
                <p className='fs-5'><strong>Authorization:</strong>Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization isn’t visible to or changeable by the user.</p>
            </div>
            <div className='w-75 mx-auto border p-4 mt-4 bg-white rounded'>
                <h3>Q: Why are you using firebase?What other options do you have to implement authentication?</h3>
                <p className='fs-5'>Firebase is a toolkit and infrastructure that aims at supporting the process of building better applications and growing a successful business. This technique continues to innovate and dominate the BaaS (Backend as a Service) market. Along with the time, it has grown so much that it has become a key component of Google’s mobile strategy. It was bought by Google and now it is being constantly improved in order to make the user experience much more convenient and productive. According to Firebase console, the application SDKs provided by this toolkit, directly interact with backend services.Therefore, there is no need to establish any connection between the app and the service.So, if you operate one of the Firebase database options, you typically write code to query the database in the app.This is distinct from traditional app development.The traditional app development process requires writing both frontend and backend software.The frontend code just implements the API endpoints exposed by the backend, and the backend code actually does the work.However, with Firebase products, traditional backend development is bypassed, putting the work into the client</p>
            </div>
            <div className='w-75 mx-auto border p-4 mt-4 bg-white rounded mb-4'>
                <h3>Q3: What other services does firebase provide other than authentication?</h3>
                <ol>
                    <li>Cloud Firestore</li>
                    <li>Analytics</li>
                    <li>Hosting Options</li>
                    <li>Firebase Pricing</li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs; <h1>This is Blogs</h1>