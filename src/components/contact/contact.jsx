import React from "react";
import { Form } from "./form";

export const Contact = () => {
    return (
        <div className="contact">
            <h3 className="h3">Contact</h3>
            <p> 
                If you&#39;re looking for a skilled and versatile web developer who can 
                bring your ideas to life, I&#39;m here to help. Let&#39;s collaborate 
                and build something amazing together!
            </p>
            <p className="mail">Email: dancode99@gmail.com</p>
            <Form />
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
    )
}