import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Social from './Social/Social';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
      );
      

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password);
    }
    const emailVerification = async () => {
        
       await sendEmailVerification()
       alert('email sent')
    }
    if (user) {
        navigate(from, { replace: true });
        alert('user found')
    }
    

    return (
        <div className='container'>
            <div className='col-lg-6 mx-auto border rounded p-4 mt-5 bg-white'>
                <h2 className='text-center mb-3'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>New to Genius Car?
                        <Link to='/register' className='text-warning text-decoration-none ms-2'>Resister Now</Link>
                    </p>
                    <Button onClick={emailVerification} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <Social></Social>
            </div>
        </div>
    );
};

export default Login;