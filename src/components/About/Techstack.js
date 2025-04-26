import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiBootstrap} from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> Java
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> Python
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> React
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> Node.js
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> MongoDB
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> JavaScript
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> SQL
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap /> Bootstrap
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> HTML
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 /> CSS
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss /> Tailwind CSS
      </Col>

      
    </Row>
  );
}

export default Techstack;
