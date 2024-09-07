import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Funfact2() {
    return (
        <Container fluid className="home-section" id="home">
            <Container className="home-content">
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
            
              <img src={myImg}
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
                className="img-fluid" alt="avatar" />
          </Col>
        </Row>
            </Container>
          </Container>
    )
}


export default Funfact2;