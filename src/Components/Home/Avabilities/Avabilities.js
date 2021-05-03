import React from 'react';
import { Link } from 'react-router-dom';
import './Avabilities.css';

const Avabilities = () => {
    return (
        <div>
            <div class="py-5 mt-5 mb-5 avabilties">
                <div class="container w-75">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="text-capitalize text-danger">I'm abaliable for freelancer projects</h3>
                            <p class="ability-text m-0">Tell me about your project story and project brief.</p>
                        </div>
                        <div class="col-md-6">
                            <Link to="/contact" class="btn btn-danger px-4 mt-4 ml-0 ml-md-5">Hire me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Avabilities;