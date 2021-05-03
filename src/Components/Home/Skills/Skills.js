import React from 'react';
import './Skills.css'
const Skills = () => {
    return (
        <div>

            <div className=" pt-5 skillSection">
                <div className="container w-75">
                    <div className="row pb-5">
                        <div className="col">
                            <h2 className="text-center">My Skills</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="design-skill">Front End</h3>
                            <p className="skill-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati possimus
                        reprehenderit beatae animi ratione inventore et.</p>
                            <div className="progress-section">
                                <p className="m-1 mt-9 mt-md-4">React</p>
                                <div className="progress h-0" style={{ height: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-info" style={{ width: "90%" }}>90%</div>
                                </div>
                                <p className="m-1 mt-4 dname">Material-UI</p>
                                <div className="progress h-0" style={{ height: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-success" style={{ width: "72%" }}>72%</div>
                                </div>
                                <p className="m-1 mt-4 dname">JavaScript</p>
                                <div className="progress h-0" style={{ height: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-danger" style={{ width: "60%" }}>60%</div>
                                </div>
                                <p className="m-1 mt-4 dname">Bootstrap</p>
                                <div className="progress h-0" style={{ height: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-primary" style={{ width: "80%" }}>80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="design-skill mt-5 mt-md-0">Back End</h3>
                            <p className="skill-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati possimus reprehenderit beatae animi ratione inventore et.</p>
                            <div className="progress-section">
                                <p className="m-1 mt-0 mt-md-4 dname">Node.js</p>
                                <div className="progress h-0" style={{ height: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-info" style={{ width: "60%" }}>00%</div>
                                </div>
                                <p className="m-1 mt-4 dname">Express.js</p>
                                <div className="progress h-0" style={{ height: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-success" style={{ width: "45%" }}>00%</div>
                                </div>
                                <p className="m-1 mt-4 dname">Firebase</p>
                                <div className="progress h-0" style={{ height: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-danger" style={{ width: "40%" }}>100%</div>
                                </div>
                                <p className="m-1 mt-4 dname">MongoDB</p>
                                <div className="progress h-0" style={{ height: "10px" }}>
                                    <div className="progress-bar progress-bar-striped bg-primary" style={{ width: "30%" }}>100%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;