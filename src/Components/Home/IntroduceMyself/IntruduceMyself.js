import React from 'react';
import './IntroduceMyself.css'
import SusantoPhoto from '../../../Images/susanto.jpg'

const IntruduceMyself = () => {
    return (
        <div className="intuduceMyself py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="w-75 p-3 siteImage">
                            <img className="img-fluid" src={SusantoPhoto} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-7 hi-there">
                        <h2 className="pt-2 pb-2">Hi There</h2>
                        <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                        <p className="pt-2">nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                        <div className="row someInfo pt-3">
                            <div className="col-md-6">
                                <h6>Name:</h6>
                                <p>Susanto Chandra</p>
                                <h6>Phone:</h6>
                                <p>(+880) 1855437765</p>
                            </div>
                            <div className="col-md-6">
                                <h6>Email:</h6>
                                <p>susanto.chandra001@gmail.com</p>
                                <h6>Linkedin:</h6>
                                <p>susanto.chandra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntruduceMyself;