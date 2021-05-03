import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Avabilities from './Avabilities/Avabilities';
import Header from './Header/Header';
import IntruduceMyself from './IntroduceMyself/IntruduceMyself';
import MyPriceing from './MyPricing/MyPriceing';
import Services from './Services/Services';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <IntruduceMyself></IntruduceMyself>
            <Skills></Skills>
            <Avabilities></Avabilities>
            <Services></Services>
            <MyPriceing></MyPriceing>
            <Footer></Footer>
        </div>
    );
};

export default Home;