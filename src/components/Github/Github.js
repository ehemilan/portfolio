import React from "react";
import GithubCards from "./GHCards";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

import Github2 from "./Github2";
function Github() {
  return (
    <div>
 <Container fluid className="resume-section">
 <Particle />
  <GithubCards />
    
  <Github2 />
  </Container>
    </div>
 
  );
}

export default Github;