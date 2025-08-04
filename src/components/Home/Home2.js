import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import girl from "../../Assets/girl.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
              I always believe that&nbsp;
              <i><b className="purple">"Success doesn’t come from what you do occasionally — it comes from what you do consistently."</b></i>
              <br />
              <br />
              I’m <b className="purple">Nagarani</b> — a passionate full-stack developer and AI explorer who doesn’t just follow trends, 
              but <b className="purple">builds the future with them.</b>
              <br />
              <br />
              I specialize in&nbsp;
              <i><b className="purple">Java, Python, the MERN Stack, and AI-powered software solutions</b></i> that blend performance with real-world impact.
              From building intelligent web apps to solving problems with machine learning, I love crafting products that matter.
              <br />
              <br />
              I'm also a proud&nbsp;
              <i><b className="purple">2× Open Source Contributor @Stylelint</b></i> and a published researcher with a UGC CARE-approved paper on Blockchain's role in the Real Estate sector.
              <br />
              <br />
              Whether it’s contributing to impactful open-source tools, solving DSA in Java, or collaborating on scalable product ideas —
              <i><b className="purple">I code with purpose, passion, and persistence.</b></i>
              <br />
              <br />
              <b className="purple">Let’s build the future — one line of code at a time.</b>
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
