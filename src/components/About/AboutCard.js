import React from "react";
import Card from "react-bootstrap/Card";
import { FaBirthdayCake, FaHome } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={window.innerWidth>=600?{ textAlign: "justify" ,marginLeft:70, marginRight:70}:{textAlign: "justify"}}>
            -   Hello dear Visitor, my name is <span className="purple">Milán Horváth</span> and I am 
            from <span className="purple"> Pusztaszabolcs, Hungary.</span>
            <br />
            -   I am currently working as a software developer at <span className="purple">Hewlett Packard</span>.
            <br />
            -   I have master degree of Computer Science. And I learnt at ELTE University in Budapest.
            <br />
            <br />
            
          </p>
          <h4 style={{textAlign:"left", fontSize:25}}>My connections:</h4>
          <ul>
            <li className="about-activity">
            <FaBirthdayCake /> 1997.06.15
            </li>
            <li className="about-activity">
              <FaHome /> Hungary, 2490 Pusztaszabolcs
            </li>
            <li className="about-activity">
              
            <AiFillMail /> hormilag@gmail.com
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
