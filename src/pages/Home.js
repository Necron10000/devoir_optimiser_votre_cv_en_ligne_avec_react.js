import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Presentation from '../components/Presentation';
import Aboutme from '../components/Aboutme';



const Home = () => {
    return (
        <div>
            <Header/>
            <Presentation />
            <Aboutme />
            <Footer />
        </div>
    );
};

export default Home;