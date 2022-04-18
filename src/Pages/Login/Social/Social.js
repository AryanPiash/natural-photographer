import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import auth from '../../../firebase_init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    let errorElement;
    if (error || githubError) {
        errorElement = (
            <div className='text-danger text-center'>
                <p>Error: {error?.message} {githubError?.message}</p>
            </div>
        )
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <div style={{ height: '2px', width: '250px', background: 'lightgray' }}></div>
                <div className='mx-3'>Or</div>
                <div style={{ height: '2px', width: '250px', background: 'lightgray' }}></div>
            </div>
            {errorElement}
            <div className='mt-4'>
                <button onClick={() => signInWithGoogle()} className='btn btn-light d-block mx-auto w-50 mb-3'>
                    <img className='me-2' style={{ width: '30px' }} src={google} alt="" />
                    <span>Google Sign In</span>
                </button>   
                <button onClick={() => signInWithGithub()} className='btn btn-light d-block mx-auto w-50'>
                    <img className='me-2' style={{ width: '30px' }} src={github} alt="" />
                    <span>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Social;