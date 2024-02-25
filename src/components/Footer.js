
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail ,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const destinationEmail= "hormilag@gmail.com";
  const subject="Job Opportunity";
  const message = `
    Dear Milán Horváth,

    I hope this email finds you well.

    [Text]

    Best regards,

    [Your Name]
    [Your Position]
    [Your Company Name]
    [Your Contact Information]
  `
  function OpenOutlook()  {
    const mailtoUrl = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl);
  }

  return (
    <Container fluid className="footer" style={{position:"fixed", bottom:0, backgroundColor:"#000020"}}>
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Milán Horváth's portfolio</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/b1v655"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/horv%C3%A1th-mil%C3%A1n-a175b3179/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={`mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
                style={{ color: "white" }}
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/hormilag/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
