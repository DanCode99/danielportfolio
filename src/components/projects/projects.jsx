import React from "react";
import img1 from "../../images/projects/1.png";
import img2 from "../../images/projects/2.png";
import img3 from "../../images/projects/3.png";

export const Projects = () =>{

    const projectsData = [
        {id: 1,
        name: "E-commerce",
        img: img1,
        link: "https://servicar.netlify.app/",
        git: "https://github.com/DanCode99/servicar-ecommerce",
        description: "This is an Ecommerce where you can add products to the cart and see the total amount."
        },
        {id: 2,
        name: "Facebook Clone",
        img: img2,
        link: "https://facebookcloneapp.netlify.app/",
        git: "https://github.com/DanCode99/facebookcloneapp",
        description: "A Facebook clone app where you can create your own account, make posts, comment, like and see your profile."
        },
        {id: 3,
        name: "Quizz App",
        img: img3,
        link: "https://quizz-app-api.netlify.app/",
        git: "https://github.com/DanCode99/Quizz-App",
        description: "This is an quizz app made with Api request where you can choose multiple questions."
        }
    ]

    return (
        <div className="projects">
            <h3 className="h3">Projects</h3>
            <p>Every project was made with passion</p>
            {projectsData.map( 
                (projects) => (
                    <div className="projects-item" key={projects.id}>
                        <a href={projects.link} target="_blank" rel="noreferrer">
                            <img src={projects.img} alt="project image"/>
                        </a>
                        <div className="projects-content">
                            <h1>{projects.name}</h1>
                            <p>{projects.description}</p>
                            <div className="btn">
                                <a href={projects.git} target="_blank" className="git" 
                                rel="noreferrer">Code <i className="fa-brands fa-github">
                                </i></a>
                                <a href={projects.link} target="_blank" className="live" 
                                rel="noreferrer">Live Demo <i className="fa-solid fa-arrow-right-from-bracket">
                                </i></a>
                            </div>
                        </div>    
                    </div>
                )
            )}
        </div>
    )
}