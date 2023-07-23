import React from "react";
import image2 from "../../images/profile/2.jpg"
export const About = () =>{
    return (
        <div className="about">
            <h3 className="h3">About</h3>
            <div className="about-content">
            <div className="img">
                <img src={image2} alt="about photo" />
            </div>
            <div className="about-info">
                <p> 
                    I&#39;m a passionate web developer based in Chile. dedicated to 
                    delivering high-quality, user-focused web experiences that meet 
                    both aesthetic and functional requirements. Prepared to build 
                    dynamic and responsive user interfaces.
                </p> 
                <div className="skills">
                    <h4>My Skills</h4>
                    <i className="fa-brands fa-html5"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                    <i className="fa-brands fa-sass"></i>
                    <i className="fa-brands fa-bootstrap"></i>
                    <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-brands fa-github"></i>
                </div>                
            </div>
            </div>
        </div>
    )
}