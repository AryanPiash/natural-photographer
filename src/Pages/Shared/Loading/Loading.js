import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'200px'}} className='d-flex justify-content-center align-items-center mt-4'>
            <Spinner  animation="border" variant="info" />
        </div>
    );
};

export default Loading;