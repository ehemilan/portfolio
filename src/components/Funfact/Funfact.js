import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/startup.svg";
import Particle from "../Particle";
import Type from "./Type";
function Funfact() {
  return (
    <section>
      <Particle />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">

                <strong className="main-name"> Milán Horváth</strong>'s portfolio
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Funfact;
