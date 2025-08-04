import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecom from "../../Assets/Projects/ecom.jpeg";
import a from "../../Assets/Projects/a.png";
import b from "../../Assets/Projects/b.png";
import c from "../../Assets/Projects/c.png";
import d from "../../Assets/Projects/d.png";
import e from "../../Assets/Projects/e.png";
import f from "../../Assets/Projects/f.png";
import rock from "../../Assets/Projects/rock.jpg";
import cal from "../../Assets/Projects/cal.jpg";
import log from "../../Assets/Projects/login.jpg";
import resume from "../../Assets/Projects/resume.png";
import rain from "../../Assets/Projects/rain.jpg";




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
              description="An intelligent MERN stack application that acts as your personal AI coding mentor. 
              It reviews, explains, and improves code using OpenAI and Gemini Flash APIs — turning errors into learning moments.
               Features include multi-language support, code history tracking, light/dark mode, and smooth authentication with Clerk. 
               Built to help developers not just fix bugs, but truly understand their code."
               skills={[
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Authentication (Clerk/Auth)",
  "HTML",
  "CSS",
  "VS Code",
  "Postman",
  "Gemini AI API"
]}

              ghLink="https://github.com/naga1914/AI-powered-code-review-"
              demoLink="https://drive.google.com/file/d/1eWBMaJtBgagY_QLH8Zk9zUn5Ak31w38G/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="AI Fashion Stylist – Smart E-commerce Experience"
              description="A modern HTML/CSS/JS e-commerce website with a built-in AI chatbot that acts as your personal fashion assistant.
              It understands user needs and recommends outfits using intelligent style matching — making shopping personalized and fun.
              Features include real-time chat, style-based suggestions, image previews, and a responsive, clean UI."
              skills={[
  "Gemini AI API",
  "REST APIs",
  "HTML",
  "CSS",
  "JavaScript",
  "VS Code"
]}

              ghLink="https://github.com/naga1914/E-commerce"
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
              skills={[
  "HTML",
  "CSS",
  "JavaScript",
  "VS Code",
  "Vercel"
]}
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
              skills={[
  "HTML",
  "CSS",
  "JavaScript",
  "VS Code",
  "Vercel"
]}

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
              skills={[
  "HTML",
  "CSS",
  "JavaScript",
  "VS Code",
  "Vercel"
]}
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
              skills={[
  "HTML",
  "CSS",
  "JavaScript",
  "VS Code",
  "Vercel"
]}
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
              kills={[
  "HTML",
  "CSS",
  "JavaScript",
  "VS Code",
  "Vercel"
]}
              ghLink="https://github.com/naga1914/Virtual_Assistant-"
               demoLink="https://virtual-assistant-dtsa.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={rain} // Replace 'c' with your actual image import or path
    isBlog={false}
    title="Rainfall Prediction ML App"
    description=" A machine learning-based web application that predicts the likelihood of rainfall using weather data inputs like temperature, humidity, and pH level. 
    Built using Python, HTML, and CSS, with a trained logistic regression model at its core. 
    Provides instant binary predictions with a clean UI and smooth Django/FastAPI backend integration. 
    Ideal for agriculture and environment-related use cases."
    skills={[
  "Python",
  "Django", // or "FastAPI" if you used that instead
  "Scikit-learn",
  "Logistic Regression",
  "HTML",
  "CSS",
  "Machine Learning"
]}
    ghLink="https://github.com/naga1914/Rainfall-Prediction" 
    demoLink="https://drive.google.com/file/d/1Q9K3heaxfEdSOzlvJ0StAvggnWK02SIi/view?usp=sharing" 
  />
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={cal} // Replace with your calculator image
    isBlog={false}
    title="Basic Calculator (Django)"
    description=" A simple web-based calculator built using Django, HTML, and CSS. 
    Performs basic arithmetic operations with a clean user interface. 
    Designed for accuracy and speed, showcasing Django template rendering and form handling for real-time math operations."
    skills={[
  "Python",
  "Django",
  "HTML",
  "CSS",
  "Vs Code"
]}

    ghLink="https://github.com/naga1914/django-calculator"
    demoLink="https://drive.google.com/file/d/1V1DUckiTC2ab_Gh3P6ho1YmdqSBh6J9E/view?usp=sharing"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={log} // Replace with your auth system image
    isBlog={false}
    title="Login & Signup System (Django)"
    description=" A secure user authentication system built using Django. 
    Includes signup, login, and logout functionality with form validation, session handling, and redirect logic. 
    Demonstrates core concepts like Django views, URL routing, and authentication workflows."
    skills={[
  "Python",
  "Django",
  "HTML",
  "CSS",
  "Vs Code"
]}
    ghLink="https://github.com/naga1914/django-login-page"
    demoLink="https://drive.google.com/file/d/1V1DUckiTC2ab_Gh3P6ho1YmdqSBh6J9E/view?usp=sharing"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={rock} // Replace with RPS game image
    isBlog={false}
    title="Rock Paper Scissors Game"
    description=" A fun and interactive Rock Paper Scissors game built using Django, HTML, and JavaScript. 
    Allows users to play against a computer with random move generation. 
    Demonstrates logic handling, user interaction, and frontend integration with Django templates."
    skills={[
  "Python",
  "Django",
  "HTML",
  "CSS",
  "Vs Code"
]}
    ghLink="https://github.com/naga1914/django-rps-game"
    demoLink="https://drive.google.com/file/d/1V1DUckiTC2ab_Gh3P6ho1YmdqSBh6J9E/view?usp=sharing"
  />
</Col>

  <Col md={4} className="project-card">
  <ProjectCard
    imgPath={resume} // Replace with your resume builder UI image
    isBlog={false}
    title="Resume Builder (Django)"
    description=" A basic Django application that generates resumes from user input. 
    Collects details like name, education, experience, and skills, then formats them into a downloadable resume layout. 
    Demonstrates form handling, context data rendering, and template usage."
    skills={[
  "Python",
  "Django",
  "HTML",
  "CSS",
  "Vs Code"
]}
    ghLink="https://github.com/naga1914/django-resume-builder"
    demoLink="https://drive.google.com/file/d/1V1DUckiTC2ab_Gh3P6ho1YmdqSBh6J9E/view?usp=sharing"
  />
</Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
