import React from "react";
import "./project.css";
import financeImg from "../../assets/finance.png";
import weatherImg from "../../assets/w2.jpg";
import editorImg from "../../assets/editor.jpg";
import blogImg from "../../assets/blog.jpg";
import signImg from "../../assets/sign.png";
import github from "../../assets/github.png";
import link from "../../assets/domain.png";
const projects = [
  {
    title: "FinLedger",
    description: "A personal finance tracker that helps to manage balance, income, and expenses effortlessly. With features like balance overviews, detailed transaction records, and interactive visual charts, it provides a clear breakdown of financial status. Stay organized and take control of your financial goals with FinLedger!",
    demoLink: "",
    githubLink: "https://github.com/Janavi-S05/FinLedger",
    backgroundImage: financeImg
  },
  {
    title: "VistaCart",
    description: "A weather application built using React that fetches real-time weather data from the OpenWeatherMap API. The app allows users to search for weather information by city and provides details such as temperature, humidity, wind speed, and more.",
    demoLink: "",
    githubLink: "https://github.com/Janavi-S05/VistaCast",
    backgroundImage: weatherImg
  },
  {
    title: "Code Evaluator Platform  ",
    description: "Admins manage candidates, create coding tests, and add test cases, sharing temporary credentials for secure access. Participant identity is verified, and proctoring ensures a cheat-free environment. Detailed reports with scores, auto-submissions, and plagiarism checks are provided to both admins and candidates.",
    backgroundImage: editorImg,
  },
  {
    title: "SLT",
    description: "This project enables communication for individuals with vocal and hearing impairments using computer vision and an R-CNN model. It captures and interprets sign language gestures in real-time via a webcam and translates text to sign language, ensuring seamless two-way communication. ",
    demoLink: "https://ieeexplore.ieee.org/document/10626090",
    backgroundImage: signImg,
  },
  {
    title: "ChronicleHub",
    description: "A personal blogging platform that allows users to create, edit, and delete posts. Each post can contain a title, description, date, images, and location. The application also allows users to search for posts based on a date range or filter them using keywords. Authentication is handled through JWT to ensure secure access.",
    githubLink: "https://github.com/Janavi-S05/ChronicleHub",
    backgroundImage: blogImg,
  }
];

const Project = () => {
  return (
    <section className="project-section" id="project">
      <h2 className="section_title">Featured Works</h2>
      <span className="section_subtitle">What i have built</span>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card" >
            <div className="project-background" style={{
              backgroundImage: `url(${project.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%", 
            }}>
              {/* <div className="project-content">
                <h3>{project.title}</h3>
              </div> */}
              <div className="project-details">
                <p>{project.description}</p>
                <div className="project-links">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <img src={link} style={{width: "25px", height:"25px"}}></img>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <img src={github} ></img>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <hr></hr>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default Project;
