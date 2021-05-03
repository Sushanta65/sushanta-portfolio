import React from 'react';
import './MyPricing.css'

const MyPriceing = () => {
    return (
        <div>

    <div className="pricingSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="awesomeHeader text-center forPt">
                        <h3 className="text-uppercase">Pricing options</h3>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</p>
                    </div>
                </div>
            </div>
            <div className="row forpb pt-5">
                <div className="col-md-4">
                    <div className="pricing-box">
                        <h3 className="header-title text-light text-center mb-0 py-3">Basic</h3>
                       <div className="pricePrice">
                        <h3 className="priceDeal text-light pt-2 text-center"><sub className="dollarSign">$</sub>450 <br/></h3>
                        <p className="freeLifeTime text-center">Free for life</p>
                       
                       </div>
                        
                    </div>
                    <div className="descriptionSection">
                        <ul className="list-group text-center text-uppercase">
                            <li className="list-group-item border-left-0 border-right-0">1 gb of space</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">10 gb of bandwidth</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">3 website</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">basic customization</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">wordpress intigration</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">email support</li>
                        </ul>
                        <button className="btn btn-danger w-100">Order</button>
                    </div>
                </div>
                <div className="col-md-4 forGrowTop mt-3 mt-md-0">
                    <div className="pricing-box">
                        <h3 className="header-title text-light text-center mb-0 py-3">Professional</h3>
                       <div className="pricePrice forRemoveBorder">
                        <h3 className="priceDeal text-light pt-2 text-center"><sub className="dollarSign">$</sub>599 <br/></h3>
                        <p className="freeLifeTime text-center text-capitalize">Monthly payment</p>
                        <div className="mostPopuler text-light text-center text-uppercase">our most populer</div>
                       </div>
                        
                    </div>
                    <div className="descriptionSection">
                        <ul className="list-group text-center text-uppercase">
                            <li className="list-group-item border-left-0 border-right-0">1 gb of space</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">10 gb of bandwidth</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">3 website</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">basic customization</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">wordpress intigration</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">email support</li>
                        </ul>
                        <button className="btn btn-danger w-100">Order</button>
                    </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                    <div className="pricing-box">
                        <h3 className="header-title text-light text-center mb-0 py-3">Enterprice</h3>
                       <div className="pricePrice">
                        <h3 className="priceDeal text-light pt-2 text-center"><sub className="dollarSign">$</sub>700 <br/></h3>
                        <p className="freeLifeTime text-center text-capitalize">Monthly payment</p>
                        
                       </div>
                        
                    </div>
                    <div className="descriptionSection">
                        <ul className="list-group text-center text-uppercase">
                            <li className="list-group-item border-left-0 border-right-0">1 gb of space</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">10 gb of bandwidth</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">3 website</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">basic customization</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">wordpress intigration</li>
                            <li className="list-group-item p-1 border-left-0 border-right-0">email support</li>
                        </ul>
                        <button className="btn btn-danger w-100">Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default MyPriceing;