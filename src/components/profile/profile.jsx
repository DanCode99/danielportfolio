import React from 'react';
import AnimateText from './animatetext';
import image1 from "../../images/profile/1.jpg"
export const Profile = () => {
    
    return (
      <div className="profile">
        <div className="img">
          <img src={image1} alt="profile photo" />
        </div>
        <div className="profile-content">
          <p>Hello I&lsquo;m</p>
          <h1 className="name">Daniel Mora</h1>
          <AnimateText/>
          <div className='contact-profile'>
            <a href="https://www.linkedin.com/in/daniel-mora-code99/" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/DanCode99" target='_blank' rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="mailto:dancode99@gmail.com">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
    );
};