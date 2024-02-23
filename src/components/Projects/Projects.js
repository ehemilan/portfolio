import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import BURGLAR from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import MASTER from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import BACHELOR from "../../Assets/Projects/blog.png";

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
              imgPath={MASTER}
              isBlog={false}
              title="Structure gauge investigation (Master thesis)"
              description="C++ based application. Point Cloud Library used in this program. The app investigate a point cloud and separate track and structures of cloud. It mark them with standard colors and it warn if there are problems at the wire."
              ghLink="https://gis.inf.elte.hu/projects/vasuti-infrastruktura-szegmentalasa/"
              demoLink="https://gis.inf.elte.hu/wordpress/wp-content/uploads/2023/02/horvath_milan_msc_thesis.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BACHELOR}
              isBlog={false}
              title="Temperature map creator (Bachelor Thesis)"
              description="C# based approximation with radial basis functions. Easy-to-use program, with which any user can easily test function approximation with their own data. I have tried to use notations and interpretations that most people can easily understand. The functions of my program are primarily used to present functions determined by approximation methods, not specifically to determine specific locations according to heat maps."
              ghLink="https://github.com/b1v655/BSCThesis-Tempmap"
              demoLink="https://github.com/b1v655/BSCThesis-Tempmap/blob/main/Szakdolgozat%20doksi/szakdolgozat.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="DotNETPincer"
              description="An application written in ASP.Net. This app managing food orders of a food delivery company. A wpf app supports the employees in managing foodcontents on the site."
              demoLink="https://github.com/b1v655/DotNETPincer"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={true}
              title="News Portal"
              description="This program also written in c# ASP.Net. This site holds news."
              demoLink="https://github.com/b1v655/NewsPortal"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={true}
              title="Webapplication developement test"
              description="This program was the test."
              dhLink="https://github.com/b1v655/WAFzh"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={true}
              title="FindYourTeacher"
              description="You need to find your teacher and write your mark in your book in. The teacher is available part time so you need find him fast. This game was a test at university. Written in C# used sql and entity framework"
              dhLink="https://github.com/b1v655/FindYourTeacher"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BURGLAR}
              isBlog={true}
              title="Burglar game"
              description="C# based game with sql database. Player can choose from 3 field size. Player must thief something without police catch him."
               ghLink="https://github.com/b1v655/Lopakodo"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
