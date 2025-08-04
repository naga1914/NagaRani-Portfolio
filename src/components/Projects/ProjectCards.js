import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* ✅ Skills styled like buttons (non-clickable) */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {props.skills?.map((skill, index) => (
            <Button
              key={index}
              variant="outline-primary"
              size="sm"
              style={{
                pointerEvents: "none", // makes them non-clickable
                borderRadius: "5px",
                fontWeight: "500",
              }}
            >
              {skill}
            </Button>
          ))}
        </div>

        {/* ✅ GitHub Button */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* ✅ Demo Button (if available) */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
