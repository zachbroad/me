import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => (
  <Container>
    <h2>Skills</h2>
    <hr/>
    <Row>
      <Col md={12}>
        <h4>Languages</h4>
        <div className="d-flex flex-wrap">
          {["Python", "Java", "C", "C++", "C#", "PHP", "Dart", "Go", "Swift", "HTML", "CSS/SCSS", "JavaScript", "SQL"].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Web Development</h4>
        <div className="d-flex flex-wrap">
          {["Bootstrap", "React (Redux, Native)", "GatsbyJS", "Hugo", "ApostropheCMS", "Express (Familiar)"].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Mobile Development</h4>
        <div className="d-flex flex-wrap">
          {["Flutter", "React Native", "SwiftUI (familiar)"].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Back-end</h4>
        <div className="d-flex flex-wrap">
          {["Django (+REST Framework)", "Node.js", "Flask (Familiar)"].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Database & Cloud Services</h4>
        <div className="d-flex flex-wrap">
          {["Heroku", "Linode", "DigitalOcean", "Cloudflare", "Netlify", "Render", "AWS (Familiar)", "Firebase (Familiar)"].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Data & Testing</h4>
        <div className="d-flex flex-wrap">
          {["Google Analytics", "MatPlotLib (Familiar)", "pandas (Familiar)", "TDD", "GraphQL"].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>

      <Col md={12} className="mt-3">
        <h4>Development Tools</h4>
        <div className="d-flex flex-wrap">
          {["git", "npm/yarn", "Google Tag Manager", "Zapier", "vim"].map((skill, idx, arr) => (
            <span key={idx} className="me-1">{skill}{idx !== arr.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
);

export default Skills;