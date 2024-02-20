import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{margin: -5,borderRadius:'30%',
                  overflow: 'hidden',}}><Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink  &&<Button variant="primary" href={props.ghLink} target="_blank">
          
        <CgWebsite /> &nbsp;
          {props.isBlog ? "website" : "demo"}
        </Button>}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CiCircleMore /> &nbsp;
            {"more.."}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
