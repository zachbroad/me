import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {ProjectInline} from "./ProjectDisplays.jsx";
import {Helmet} from "react-helmet";

import Layout from "./Layout.jsx";
import Skills from "./Skills.jsx";
import Bio from "./Bio.jsx";
import {PROJECTS} from "./Projects.jsx";

const HomePage = () => (
  <Layout>
    <Helmet>
      <title>Zach Broad — Home</title>
    </Helmet>
    <Row>
      <Col className={"my-2"}>
        <div className="d-flex flex-column align-items-center my-4">
          <Bio/>
          <hr width={67} style={{borderStyle: "dashed", marginBottom: "1.0rem"}}/>
          <ul className="list-inline">
            <li className={"list-inline-item"}><a href="https://www.github.com/zachbroad/">Github</a></li>
            <li className={"list-inline-item"}><a href="https://www.linkedin.com/in/zachbroad/">LinkedIn</a></li>
            <li className={"list-inline-item"}><Link to="/projects/">Projects</Link></li>
            <li className={"list-inline-item"}><a href="/Resume.pdf">Resume</a></li>
            <li className={"list-inline-item"}><Link to="/contact/">Contact</Link></li>
          </ul>
        </div>
      </Col>
    </Row>

    <Row>
      <Col md={12} lg={4} className="order-lg-2 order-md-1 mb-5">
        <Skills/>
      </Col>

      <Col md={12} lg={8} className="order-lg-1 order-md-2">
        <h2>Projects</h2>
        <hr/>
        {PROJECTS.map((value, idx) => (
          <ProjectInline projectData={value} key={idx}/>
        ))}
      </Col>
    </Row>
  </Layout>
);

export default HomePage;