import Layout from "./Layout.jsx";
import {Col, Row} from "react-bootstrap";

import {PROJECTS} from "./Projects.jsx";
import {ProjectCard} from "./ProjectDisplays.jsx";
import {Helmet} from "react-helmet";

const ProjectsPage = () => (
  <Layout>
    <Helmet>
      <title>Zach Broad — Projects</title>
    </Helmet>

    <Row>
      <Col className={"my-2"}>
        <div className="d-flex flex-column align-items-center my-4 text-center">
          <h1 style={{fontWeight: "bold"}}>Projects</h1>
          <p></p>
        </div>
      </Col>
    </Row>

    <Row>
      {PROJECTS.map((value, idx) => (
        <ProjectCard projectData={value} key={idx}/>
      ))}
    </Row>
  </Layout>
);

export default ProjectsPage;
