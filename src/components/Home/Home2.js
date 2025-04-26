import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import girl from "../../Assets/girl.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCode } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I always believe in that   "Success doesn’t come from what you do occasionally, it comes from what you do consistently."
              <br />
              <br />I’m Nagarani, one among the few who don’t just follow trends — I build the future with them. As a passionate and purpose-driven developer, I specialize in
              <i>
                <b className="purple"> Java, Python, the MERN Stack, and AI-powered software solutions.</b>
              </i>
            <br/>
             I’m passionate about building 
             <i>
                <b className="purple">full-stack applications and intelligent AI-driven </b>
              </i>
             solutions that solve real-world problems. I aspire to contribute to impactful 
             <i>
                <b className="purple">open-source projects and collaborate </b>
              </i>
             with communities that drive innovation forward.
             <br/>
            <i>
              <b className="purple">I’m driven by the challenge of turning bold ideas into scalable, future-ready products.</b>
            </i>
            <br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={girl} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/naga1914"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/22nn1a0551nagarani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaCode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Nagarani1914/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&to=nagaraniseelamneni@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  >
                <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
