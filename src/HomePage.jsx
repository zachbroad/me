import Layout from "./Layout.jsx";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {PROJECTS} from "./Projects.jsx";
import {ProjectInline} from "./ProjectDisplays.jsx";
import Skills from "./Skills.jsx";
import Bio from "./Bio.jsx";
import React from "react";
import {Helmet} from "react-helmet";

const HomePage = () => (
  <Layout>
    <Helmet>
      <title>Zach Broad — Home</title>
    </Helmet>
    <Row>
      <Col className={"my-2"}>
        <div className="d-flex flex-column align-items-center my-4">
          <h1 style={{fontWeight: "bold"}}>Zach Broad</h1>
          <ul className="list-inline">
            <li className={"list-inline-item"}><a href="https://www.github.com/zachbroad/">Github</a></li>
            <li className={"list-inline-item"}><a href="https://www.linkedin.com/in/zachbroad/">Linkedin</a></li>
            <li className={"list-inline-item"}><Link to="/projects/">Projects</Link></li>
            <li className={"list-inline-item"}><a href="/resume.pdf/">Resume</a></li>
            <li className={"list-inline-item"}><Link to="/projects/">Contact</Link></li>
          </ul>
        </div>
      </Col>
    </Row>

    <Row>

      <Col md={12} lg={8}>
        <h2>Projects</h2>
        <hr/>
        {PROJECTS.map((value, idx) => (
          <ProjectInline projectData={value} key={idx}/>
        ))}
      </Col>

      <Col md={12} lg={4}>
        <Bio />
        <Skills/>
      </Col>
    </Row>
  </Layout>
);

export default HomePage;