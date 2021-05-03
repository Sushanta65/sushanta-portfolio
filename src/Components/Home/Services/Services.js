import React, {  } from 'react';
import {FaCamera, FaCircleNotch, FaApple, FaFileVideo, FaSearchDollar, FaCode,} from "react-icons/fa";
import './Services.css'

const Services = () => {

  const servicesInfo = [
    {
      id: 1,
      icon: <FaCode className="icons" />,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaCircleNotch className="icons" />,
      heading: "Web Designing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaCamera className="icons" />,
      heading: "Photography",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaSearchDollar className="icons" />,
      heading: "SEO Expert",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaFileVideo className="icons" />,
      heading: "Video Editing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaApple className="icons" />,
      heading: "App Devlopment",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
  ]
  // setServices(servicesInfo)
  return (
    <div>
        <div className="services py-5">
      <div className="container">
        <div className="services-header">
          <div className="common">
            <h1 className="mainHeader">My Services</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row">
            {servicesInfo.map(serviceInfo => (
              <div className="col-md-4">
                <div className="services-box p-4 m-2">
                  {serviceInfo.icon}
                  <div className="services-box-header">{serviceInfo.heading}</div>
                  <div className="services-box-text">{serviceInfo.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;