import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Render the App Store button only if apLink is provided */}
        {props.apLink && (
          <Button variant="primary" href={props.apLink} target="_blank">
            <AiFillApple /> &nbsp;
            {props.isBlog ? "Blog" : "App Store"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.psLink && (
          <Button
            variant="primary"
            href={props.psLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaGooglePlay /> &nbsp;
            {"Play Store"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
