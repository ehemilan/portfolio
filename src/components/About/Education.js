import React from "react";
import { Col, Row } from "react-bootstrap";
import vezer from "../../Assets/works/vezer.png";
import elte from "../../Assets/works/ELTE_logo.png";
function Education() {
  return (
    <>
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"white"}} onClick={ () => window.open("https://gis.inf.elte.hu/projects/vasuti-infrastruktura-szegmentalasa/", '_blank', 'noopener,noreferrer')}>
        <img src={elte} alt="elte" width="100" height="100"   />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"white"}} onClick={ () => window.open("https://archive.pusztaszabolcs.hu/dokumentumok/Horvath_Milan_meltatas.pdf", '_blank', 'noopener,noreferrer')} >
        <img src={vezer} alt="szabvez"  width="80" height="100"/>
      </Col>
     
      
    </Row>
    </>
   
  );
}

export default Education;
