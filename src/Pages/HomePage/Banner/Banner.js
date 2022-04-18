import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/camera.png'
import banner2 from '../../../images/banner/adventure.jpg'
import banner3 from '../../../images/banner/city.png'
import './Banner.css';


const Banner = () => {
   
    return (
        <Carousel  fade pause={false}>
            <Carousel.Item interval={2000}>
                <img height={700}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-caption'>
                    <h3>The Beauty of the Nature</h3>
                    <p>The beauty of nature can have a profound effect upon our senses, those gateways from the outer world to the inner, whether it results in disbelief in its very existence as Emerson notes, or feelings such as awe, wonder, or amazement.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img height={700} width={'auto'}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='carousel-caption'>
                    <h3>Providing the best shoots of Nature.</h3>
                    <p>It’s often said that “the best camera is the one you have with you” – you don’t need a high-end professional camera to get a great shot, and even with the best equipment there’s no disguising poor composition and poor lighting. A thoughtfully-composed smartphone image will almost always beat a hasty snap on an expensive camera.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img height={700} width={'auto'}
                    className="d-block w-100 mh-75"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='carousel-caption'>
                    <h3>Night mood of city also amazing nature feel.</h3>
                    <p>Slow movements such as the ripples of water or clouds moving across the sky place effortless demands on our working memory but enough to distract us from spiralling rumination, self-blame and hopelessness.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;