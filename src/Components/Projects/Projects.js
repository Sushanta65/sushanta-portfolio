import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

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
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-photo">
                            <div className="card">
                                
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