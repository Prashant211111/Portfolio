import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Virtual_Attendance_management_System from "../../Assets/Projects/Virtual_Attendance_management_System.png";
import DigitalClock from "../../Assets/Projects/DigitalClock.png";
import bitsOfCode from "../../Assets/Projects/Weather-Application.png";
import ContentSphere from "../../Assets/Projects/ContentSphere.png";
import Admin from "../../Assets/Projects/Admin.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ContentSphere}
              isBlog={false}git 
              title="Content Sphere"
              description="A React web app that fetches and displays API data using Redux Toolkit and Context API, featuring pagination, dynamic UI updates, and efficient state management."
              ghLink="https://github.com/Prashant211111/ReduxProject"
              demoLink="https://redux-project-hazel-phi.vercel.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Admin}
              isBlog={false}
              title="Dashboard-Admin"
              description="This Admin Dashboard is a responsive and feature-rich web interface built using ReactJS, Material UI, Context API, and JavaScript. Styled with Material UI and powered by Context API for global state management, this dashboard ensures a seamless and scalable admin experience."
              ghLink="https://github.com/Prashant211111/AdminSphere.git"
              demoLink="https://admin-sphere-theta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DigitalClock}
              isBlog={false}
              title="DigitalClock"
              description="Developed a dynamic digital clock using HTML, CSS, and JavaScript. It accurately fetches and displays the current time, showcasing real-time updates in an aesthetically pleasing interface."
              ghLink="https://github.com/Prashant211111/digitalclock.git"
              demoLink="https://prashant211111.github.io/digitalclock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather-Application"
              description="Developed a Weather Application using HTML, CSS and JavaScript. It usage weather map API to fetch real time data and provide various type of Weather information like humidity, wind per hour speed, Weather condition (rainy, cloudy, storm etc.), real time temprature as well as country flag."
              ghLink="https://github.com/Prashant211111/Weather-Application.git"
              demoLink="https://prashant211111.github.io/Weather-Application/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Virtual_Attendance_management_System}
              isBlog={false}
              title="Virtual_Attendance_management_System"
              description="Developed an web application for personalized virtual Attendance, leveraging scalable backend architecture. Implemented secure user authentication and data storage with MySQL, enhancing user trust and experience. Result: Improved user experience by providing dynamic Application and notified by mail services."
              ghLink="https://github.com/Prashant211111/Virtual_Attendance_management_System.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
