import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import pressmen from "../../Assets/works/Pressmen.png";
import schauer from "../../Assets/works/Schauer.jpg";
import hp from "../../Assets/works/hp.png";
import hpe from "../../Assets/works/hpe.png";
import telekom from "../../Assets/works/telekom.png";
import elte from "../../Assets/works/elte.png";
import WorkPaper from "./WorkPaper"
function Experiences() {
    const [choosen, setChoosen] = useState(null);
  return (
    <>
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"white"}} onClick={()=> {if (choosen==="hp")setChoosen(null);
        else{setChoosen("hp");
    window.scrollTo(0, window.scrollY+500);}}}>
        <img src={hp} alt="02.2024-present" width="100" height="100"   />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"white"}}  onClick={()=> {if (choosen==="hpe")setChoosen(null);
        else{setChoosen("hpe");
    window.scrollTo(0, window.scrollY+500);}}} >
        <img src={hpe} alt="04.2023-present"  width="100" height="65"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"white"}}  onClick={()=> {if (choosen==="pressmen")setChoosen(null);
        else{setChoosen("pressmen");
    window.scrollTo(0, window.scrollY+500);}}}>
        <img src={pressmen} alt="10.2022-present" width="100" height="100"  />
      </Col>   
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"white"}}  onClick={()=> {if (choosen==="elte")setChoosen(null);
        else{setChoosen("elte");
    window.scrollTo(0, window.scrollY+500);}}} >
        <img src={elte} alt="06.2020-09.2020" width="100" height="100" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"white"}}  onClick={()=> {if (choosen==="telekom")setChoosen(null);
        else{setChoosen("telekom");
    window.scrollTo(0, window.scrollY+500);}}} >
        <img src={telekom} alt="06.2018-09.2019" width="80" height="100"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{backgroundColor:"white"}}  onClick={()=> {if (choosen==="schauer")setChoosen(null);
        else{setChoosen("schauer");
    window.scrollTo(0, window.scrollY+500);}}}>
        <img src={schauer} alt="07.2017-08.2017" width="100" height="40"  />
      </Col>
      
    </Row>
    <WorkPaper choosen={choosen}/>
    </>
   
  );
}

export default Experiences;
