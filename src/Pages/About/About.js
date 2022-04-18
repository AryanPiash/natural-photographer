import React from 'react';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 my-5 '>
                        <img width='75%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrgCn8fFTpCvvH75fq6n8m72KXK1BTe9DOQ&usqp=CAU" alt="" />
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <p className='fs-4'>Hello! I'm Aryan Piash. I develop web applications, mobile applications. My core skill is based on JavaScript.I also proficient at Html,Css,Bootstrap,Tailwind and Meterial UI.I love to do most of the things using JavaScript. I love to make the web more open to the world. I am still studing with a bachelor's degree in Computer Science Engineering from Deffodil Internatinal Univercity.My future goal is getting proffetional at a Frontend and Backend of the web development.I also love MERN stack wich is most populer and best job opportunity in the world.I am available for any kind of job opportunity that suits my interests.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default About;