import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiMsqlServer,
} from "react-icons/di";
import {
  SiFirebase,
  SiAzuredevops,
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
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://react.dev/", '_blank', 'noopener,noreferrer') }>
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://www.javascript.com/", '_blank', 'noopener,noreferrer') } >
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://www.typescriptlang.org/", '_blank', 'noopener,noreferrer') }>
      <SiTypescript /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://dotnet.microsoft.com/en-us/", '_blank', 'noopener,noreferrer') }>
      <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://www.microsoft.com/en-us/sql-server/sql-server-downloads", '_blank', 'noopener,noreferrer') }>
      <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://azure.microsoft.com/en-us/products/devops", '_blank', 'noopener,noreferrer') }>
      <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://firebase.google.com/", '_blank', 'noopener,noreferrer') }>
      <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://nodejs.org/en", '_blank', 'noopener,noreferrer') }>
      <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://visualstudio.microsoft.com/", '_blank', 'noopener,noreferrer') }>
      <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://www.microsoft.com/hu-hu/microsoft-365/excel?ef_id=_k_CjwKCAiAivGuBhBEEiwAWiFmYYobG_AhC4I8xLFlKxA28FMQSvn9T6HCBGPn9fT1MEx_HkJajj5c1RoCBwsQAvD_BwE_k_&OCID=AIDcmmk7f7un5i_SEM__k_CjwKCAiAivGuBhBEEiwAWiFmYYobG_AhC4I8xLFlKxA28FMQSvn9T6HCBGPn9fT1MEx_HkJajj5c1RoCBwsQAvD_BwE_k_&gad_source=1&gclid=CjwKCAiAivGuBhBEEiwAWiFmYYobG_AhC4I8xLFlKxA28FMQSvn9T6HCBGPn9fT1MEx_HkJajj5c1RoCBwsQAvD_BwE", '_blank', 'noopener,noreferrer') }>
      <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://www.powershellgallery.com/", '_blank', 'noopener,noreferrer') }>
      <SiPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://spring.io", '_blank', 'noopener,noreferrer') }>
      <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://vaadin.com/", '_blank', 'noopener,noreferrer') }>
      <SiVaadin />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={ () => window.open("https://www.postgresql.org/", '_blank', 'noopener,noreferrer') }>
      <DiPostgresql />
      </Col>
    </Row>
  );
}

export default Techstack;
