import React from 'react';
import './MainHeader.css';
import SusantoPhoto from '../../../Images/susanto.jpg'
import Typewriter from 'typewriter-effect';


const MainHeader = () => {
    
    return (
        <div className="header-wraper text-white">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7">
                        <div className="intro">
                            <h1 className="display-5 d-block header-text">Hello, 

                            <br/>I'm <span><Typewriter
                                options={{
                                    strings: ['Susanto Chandra.', 'a web developer.', 'a freelancer.', 'a hard-worker'],
                                    typeSpeed: 670,
                                    autoStart: true,
                                    loop: true,
                                  }}
                            /></span></h1>


                            <p className="blockquote">i,m Susanto, professional web developer with long time experience in this field​</p>
                            <button className="portfolio-btn">Portfolio</button>
                            <button className="cv-btn ml-2"> <a href="https://drive.google.com/uc?export=download&id=1H3dyFAXYFvYNbe0e_vLoK6gyHaEeA_sM"> Download CV </a></button>
                        </div>
                    </div>
                    <div className="col-md-5 pb-5 pb-md-0">
                        <div>
                            <img className="img-fluid img" src={SusantoPhoto} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MainHeader;