import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Col, Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", marginBottom:200}}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Github <strong className="purple">Activity</strong>
      </h1>
      <Col className="tech-icons" style={{justifyContent:"center", position: "relative"}} onClick={()=>window.open("https://github.com/b1v655", '_blank', 'noopener,noreferrer')}>     <GitHubCalendar
        username="b1v655"
        blockSize={15}
        blockMargin={5}
        color="#5050ff"
        fontSize={16}
         
      />
      </Col>
    </Row>
  );
}

export default Github;
