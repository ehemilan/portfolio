import React from "react";
import Card from "react-bootstrap/Card";
import { SiGitbook } from "react-icons/si";

import { Container, Row, Col } from "react-bootstrap";
import { BsStar } from "react-icons/bs";
import { CgGitFork } from "react-icons/cg";
import { FaCircle, FaStar } from "react-icons/fa";
import colors from "./colors.json"
const RepoCard = ({ repo, language }) => {
  return (
    <Card className="project-card-view">
      <Card.Header style={{borderBottom:5,borderBottomColor:"purple"}}>
       
         
            <Card.Title>

              <h6 style={{marginTop:30,marginBottom:30}}>
                
            <SiGitbook />
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "Gold",  marginLeft:10}}
                >
                  {repo.name}
                </a>{" "}
              </h6>
            </Card.Title>
      </Card.Header>

      <Card.Body >
        <Container>
          <p variant="body1">{repo.description}</p>

          <Row style={{ justifyContent: "center"}}>

            {repo.language ? (
              <>
              <Col><React.Fragment>
                
                <FaCircle  style={{ color: colors[repo.language],marginRight:-10}}/
                  >
              </React.Fragment>
              </Col>
              <Col>
                <React.Fragment>
                  

                  <p style={{ marginRight: "10px" }}>
                    {repo.language}
                  </p>
                </React.Fragment>
              </Col>
              </>
              

            ) : null}
            {
              <Col>
                <React.Fragment>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      marginRight: "10px",
                      color: "Gold",
                    }}
                  >
                    <FaStar />
                    {repo.stargazers_count}
                  </a>
                </React.Fragment>
              </Col>

            }
            {
              <Col>
                <React.Fragment>
                  <a
                    href={`${repo.html_url}/fork`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      marginRight: "10px",
                      color: "Gold",
                    }}
                  >
                    <CgGitFork />
                    {repo.forks_count}
                  </a>
                </React.Fragment>
              </Col>}
          </Row>
        </Container>

      </Card.Body>
    </Card>
  );
};

export default RepoCard;