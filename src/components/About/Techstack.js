import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
} from "react-icons/di";
import {
  SiFirebase,
  SiAzuredevops,
  SiMysql,
  SiDotnet,
  SiTypescript,
  SiVaadin,
  SiSpring,
  SiPowershell,
  SiMicrosoftexcel,
  SiVisualstudio,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVaadin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiPostgresql />
      </Col>
    </Row>
  );
}

export default Techstack;
