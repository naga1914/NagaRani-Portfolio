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
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiFastapi,
  SiDjango,
  SiPostman,
  SiTensorflow,
  SiScikitlearn,
  SiGithub,
  SiVisualstudiocode,
  SiFigma,
  SiVercel,
  SiOpenai,
  SiGooglecolab,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <h1 className="project-heading">
        <strong className="purple">Tech Stack</strong> I Use
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons"><DiJava /> </Col>
        <Col xs={4} md={2} className="tech-icons"><DiPython /> </Col>
        <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /> </Col>
        <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiNodejs /> </Col>
        <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiMysql /> </Col>
        <Col xs={4} md={2} className="tech-icons"><SiDjango /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFastapi /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiHtml5 /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiCss3 /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiOpenai /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiGooglecolab /></Col>
      </Row>
    </>
  );
}

export default Techstack;
