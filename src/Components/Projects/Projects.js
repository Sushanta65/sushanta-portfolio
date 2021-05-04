import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import project1 from '../../Images/project1.jpg'
import project2 from '../../Images/project7.jpg'
import project3 from '../../Images/project4.jpg'

const Projects = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="projects py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>My Recent Projects</h2>
                            <p>Here some project I have to done.</p>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={project1} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">SD Softwares</h5>
                                    <p className="card-text " style={{ fontSize: '14px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">React Project</li>
                                </ul>
                                <div className="card-body">
                                    <a target="_blank" href="https://sd-softwares.web.app/" className="card-link">Visit Site</a>
                                    <a target="_blank" href="https://github.com/Porgramming-Hero-web-course/complete-website-client-Sushanta65" className="card-link">Code</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={project2} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">E-Commerce City Shop</h5>
                                    <p className="card-text " style={{ fontSize: '14px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">React Project</li>
                                </ul>
                                <div className="card-body">
                                    <a target="_blank" href="https://60674cf5d9037b0008286c5a--flamboyant-feynman-a21504.netlify.app" className="card-link">Visit Site</a>
                                    <a target="_blank" href="https://github.com/Porgramming-Hero-web-course/full-stack-client-Sushanta65" className="card-link">Code</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={project3} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Axit</h5>
                                    <p className="card-text " style={{ fontSize: '14px' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Bootstrap Web Design</li>
                                </ul>
                                <div className="card-body">
                                    <a target="_blank" href="https://sushanta65.github.io/axit/" className="card-link">Visit Site</a>
                                    <a target="_blank" href="https://github.com/Sushanta65/axit" className="card-link">Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;