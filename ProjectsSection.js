import React from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Explore some of our latest projects</h2>
      <p className="section-description">
        Nexivora empowers hundreds of clients globally to embrace modern technology and elevate customer experiences.
      </p>
      <div className="projects-grid">
        <div className="project-card">
          <img src="elektrafi.jpg" alt="Project 1" className="project-image" />
          <h3 className="project-title">Elektrafi Website</h3>
          <p className="project-description">
          Transformed Elektrafi's online presence with a website highlighting their dedication to financial empowerment within communities.
          </p>
        </div>
        <div className="project-card">
          <img src="cresmedia.jpg" alt="Project 2" className="project-image" />
          <h3 className="project-title">CresMedia's Wesbite</h3>
          <p className="project-description">
          Revitalized CresMedia's online identity, showcasing their unique Design-as-a-Service model for startups, solopreneurs, and SMEs.
          </p>
        </div>
        <div className="project-card">
          <img src="myvitaminstore.jpg" alt="Project 3" className="project-image" />
          <h3 className="project-title">How Nexivora helped myvitaminstore expand their business</h3>
          <p className="project-description">
            myvitaminstore used blockchain for secure real-time payments, supporting 3,500 customers and managing over $1 million.
          </p>
        </div>
        <div className="project-card">
          <img src="breshna.jpg" alt="Project 4" className="project-image" />
          <h3 className="project-title">Enhanced Breshna's online presence</h3>
          <p className="project-description">
          Enhanced Breshna's online presence with a website that expands their mission of democratizing impactful game development.          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
