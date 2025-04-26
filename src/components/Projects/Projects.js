import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import a from "../../Assets/Projects/a.png";
import b from "../../Assets/Projects/b.png";
import c from "../../Assets/Projects/c.png";
import d from "../../Assets/Projects/d.png";
import e from "../../Assets/Projects/e.png";
import f from "../../Assets/Projects/f.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a}
              isBlog={false}
              title="AI-Powered Code Review Tool"
              description="• An intelligent MERN stack application that acts as your personal AI coding mentor. 
              It reviews, explains, and improves code using OpenAI and Gemini Flash APIs — turning errors into learning moments.
               Features include multi-language support, code history tracking, light/dark mode, and smooth authentication with Clerk. 
               Built to help developers not just fix bugs, but truly understand their code."
              ghLink="https://github.com/naga1914/AI-powered-code-review-"
              demoLink="https://drive.google.com/file/d/1eWBMaJtBgagY_QLH8Zk9zUn5Ak31w38G/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={b}
              isBlog={false}
              title="Restaurant Website"
              description="This restaurant website offers an immersive and engaging experience with a dynamic hero section, 
              interactive menus, and seamless table booking functionality. Video backgrounds and a sleek dish slider enhance the atmosphere,
               making it feel like a real-world dining experience. With smooth navigation and visually stunning design, it captures the essence of the restaurant beautifully."
              ghLink="https://github.com/naga1914/Restaurant_Website-"
              demoLink="https://drive.google.com/file/d/1HmNwn72cBZCG8PmqM40fxNfjc5dyKCM9/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c}
              isBlog={false}
              title="Agency Website"
              description="This sleek, professional Web Agency website is designed with a modern UI and built using HTML and Tailwind CSS for a fast, 
              responsive, and scalable experience. It features essential sections like Home, Services, Skills, Recent Projects, and Reviews, 
              providing an elegant showcase of your agency's offerings. Fully SEO optimized and easy to customize, 
              it ensures a smooth user experience across all devices while maintaining fast loading times"
              ghLink="https://github.com/naga1914/Agency-website-using-html-Tailwind-Css-"
              demoLink="https://drive.google.com/file/d/1__bBK4lLkINj1YUjTYHXXj_RNSEBji6h/view?usp=sharing"
            />
           
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d}
              isBlog={false}
              title="Car rental website"
              description="Ridex is a modern car rental platform that simplifies vehicle leasing across New York, New Jersey, and Connecticut. 
              With advanced search, detailed car listings, and an interactive UI, users can easily find and rent cars. The responsive design and 
              smooth user experience make it accessible on all devices, with future features like loyalty rewards and a referral system."
              ghLink="https://github.com/naga1914/Car-Rental-Website"
              demoLink="https://drive.google.com/file/d/1aF3JBn7YHF-t4SMUXSaaLxpqs0TsSdbR/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e}
              isBlog={false}
              title="E-commerce Clone"
              description="This fully responsive and interactive e-commerce website offers a clean, modern homepage with a product carousel and featured product sections. Designed with a mobile-first approach, it ensures a seamless experience across all devices using Flexbox and CSS Grid. The interactive UI includes a functional search bar, hover animations, and dynamically rendered product listings for an engaging shopping experience."
             ghLink="https://github.com/naga1914/Amazon-"
             demoLink="https://drive.google.com/file/d/1mMyzaM1m6EXkIwlDS-c_hinGGhFn20v2/view?usp=sharing"
          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f}
              isBlog={false}
              title="Virtual assistant"
              description="This AI-powered virtual assistant interacts with users through voice commands, offering a fun and engaging experience. It greets users, plays music, tells jokes, and performs Google searches, all activated by simple voice commands. Built with HTML, CSS, and JavaScript, the assistant provides a seamless and interactive user experience, making everyday tasks easier and more enjoyable."
              ghLink="https://github.com/naga1914/Virtual_Assistant-"
               demoLink="https://virtual-assistant-dtsa.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
