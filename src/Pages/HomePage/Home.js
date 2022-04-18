import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Works from './Works/Works';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Works></Works>
            <Footer></Footer>
        </>
    );
};

export default Home;