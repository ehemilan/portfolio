import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
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
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I studied programming autodidactically in middle school. I am interested in mathematics.
            <br/>
            <br/>
            I studied Computer Science at ELTE University. And I chosed Software technology specialization.
            <br/>
            <br/>
            I have most experience in C based programming languages. In the development of frontends I used React, Javascript, and HTML.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg}
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
                className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/b1v655"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/horv%C3%A1th-mil%C3%A1n-a175b3179/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={`mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
                  className="icon-colour  home-social-icons"
                >

                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hormilag/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
