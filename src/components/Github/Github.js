import React from "react";
import GithubCards from "./GHCards";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Github() {
  return (
    <div>
 <Container fluid className="resume-section">
 <Particle />
  <GithubCards />
    
  </Container>
    </div>
 
  );
}

export default Github;