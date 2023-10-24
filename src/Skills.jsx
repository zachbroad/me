import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Skills = () => (
  <Container>
    <h2>Skills</h2>
    <hr/>
    <Row>
      <Col md={12}>
        <h4>Languages</h4>
        <div className="d-flex flex-wrap">
          {[
            "Python",
            "Java",
            "JavaScript",
            "C++",
            "C",
            "C#",
            "HTML",
            "CSS/SCSS",
            "SQL",
            "Dart",
            "Go",
            "PHP",
            "Swift"
          ].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Web Development</h4>
        <div className="d-flex flex-wrap">
          {[
            "Bootstrap",
            "React (Redux, Native)",
            "GatsbyJS",
            "Hugo",
            "ApostropheCMS",
          ].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Mobile Development</h4>
        <div className="d-flex flex-wrap">
          {[
            "Flutter",
            "React Native",
            "SwiftUI"
          ].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Back-end</h4>
        <div className="d-flex flex-wrap">
          {[
            "Django (+REST Framework)",
            "Node.js",
            "Flask (familiar)"
          ].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Database & Cloud Services</h4>
        <div className="d-flex flex-wrap">
          {[
            "Google Cloud Platform",
            "AWS",
            "Heroku",
            "Linode",
            "DigitalOcean",
            "Cloudflare",
            "Netlify",
            "Render",
            "Firebase"
          ].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Data & Testing</h4>
        <div className="d-flex flex-wrap">
          {[
            "pandas",
            "REST API Design",
            "GraphQL",
            "JSON",
            "XML",
            "TDD",
            "Google Analytics",
            "MatPlotLib",
          ].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Development Tools</h4>
        <div className="d-flex flex-wrap">
          {
            [
              "git",
              "Docker",
              "Linux",
              "vim",
              "npm/yarn/bun",
              "Google Tag Manager",
              "Zapier"
            ].map((skill, idx, arr) => (
              <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
            ))}
        </div>
      </Col>
    </Row>
  </Container>
);

export default Skills;