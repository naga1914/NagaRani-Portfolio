import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCode } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Nagarani Seelamneni</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/naga1914"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/22nn1a0551nagarani/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaCode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/Nagarani1914/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
              href="https://mail.google.com/mail/u/0/?view=cm&to=nagaraniseelamneni@gmail.com"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              >
              <MdEmail />
             </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
