import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mypic from "../../Assets/Mypic.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NagaRani Seelamneni</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
  <Type />
  <p style={{ fontSize: "1.2em", paddingTop: "20px", fontWeight: 500 }}>
    I build intelligent, full-stack applications using MERN, Python, and AI — turning bold ideas into powerful products.
    <br />
    2× Open Source Contributor • UGC-CARE Published Researcher • Passionate AI Explorer
  </p>
</div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt><img
                src={Mypic}
                alt="home pic"
                className="img-fluid"
                style={{
                  width: "600px",
                  height: "600px",
                  borderRadius:"50%",
                  objectFit: "cover"
                }}
              /></Tilt>  
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;