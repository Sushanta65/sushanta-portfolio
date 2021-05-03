import React from 'react';
import IntruduceMyself from '../Home/IntroduceMyself/IntruduceMyself';
import Navbar from '../Shared/Navbar/Navbar';
import Skills from './../Home/Skills/Skills';
import Footer from './../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
           <Navbar></Navbar>
           <IntruduceMyself></IntruduceMyself>
           <Skills></Skills>
           <Footer></Footer>
        </div>
    );
};

export default About;