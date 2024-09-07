import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVisualstudio,
  SiMicrosoft,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://visualstudio.microsoft.com/", '_blank', 'noopener,noreferrer') }>
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://code.visualstudio.com/", '_blank', 'noopener,noreferrer') }>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://www.postman.com/", '_blank', 'noopener,noreferrer') }>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://git-scm.com/", '_blank', 'noopener,noreferrer') }>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://www.microsoft.com/en-gb", '_blank', 'noopener,noreferrer') }>
        <SiMicrosoft />
      </Col>
    </Row>
  );
}

export default Toolstack;
