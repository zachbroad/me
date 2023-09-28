import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PROJECT_PROPTYPES = {
  projectData: PropTypes.shape({
    title: PropTypes.string,
    subheading: PropTypes.string,
    image: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
    button: PropTypes.shape({text: PropTypes.string, link: PropTypes.string}),
    button2: PropTypes.shape({text: PropTypes.string, link: PropTypes.string}),
    button3: PropTypes.shape({text: PropTypes.string, link: PropTypes.string})
  })
};

export const ProjectCard = ({projectData}) => {
  return (
    <Col sm={12} md={4} className="mb-3">
      <Card>
        <div style={{paddingTop: '100%', position: 'relative'}}>
          <Link to={projectData.button.link}>
            <Card.Img
              src={projectData.image}
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </Link>
        </div>
        <Card.Header>
          <h2>{projectData.title}</h2>
          <h6>{projectData.subheading}</h6>
        </Card.Header>
        <Card.Body>
          <ul>
            {projectData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Card.Body>
        <Card.Footer>
          <Button variant={"success"} as={Link} to={projectData.button.link} className={"me-2"} target={"_blank"}>
            {projectData.button.text}
          </Button>
          {projectData.button2 &&
            <Button variant={"success"} as={Link} to={projectData.button2.link} className={"me-2"} target={"_blank"}>
              {projectData.button2.text}
            </Button>
          }
          {projectData.button3 &&
            <Button variant={"dark"} as={Link} to={projectData.button3.link} target={"_blank"}>
              {projectData.button3.text}
            </Button>
          }
        </Card.Footer>
      </Card>
    </Col>
  );
}

ProjectCard.propTypes = PROJECT_PROPTYPES;


export const ProjectInline = ({projectData}) => {
  return (
    <Row>
      <Col sm={12} md={3} className={"mb-3"}>
        <Link to={projectData.button.link}>
          <div style={{paddingTop: '100%', position: 'relative', width: '100%'}}>
            <img
              src={projectData.image} alt="Project Image"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </div>
        </Link>
      </Col>
      <Col sm={12} md={9}>
        <div className="d-flex flex-column">
          <h4>{projectData.title}</h4>
          <h6>{projectData.subheading}</h6>
          <ul>
            {projectData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="mt-auto">
            <Button variant={"success"} as={Link} to={projectData.button.link} className={"me-2"} target={"_blank"}>
              {projectData.button.text}
            </Button>
            {projectData.button2 &&
              <Button variant={"success"} as={Link} to={projectData.button2.link} className={"me-2"} target={"_blank"}>
                {projectData.button2.text}
              </Button>
            }
            {projectData.button3 &&
              <Button variant={"dark"} as={Link} to={projectData.button3.link} target={"_blank"}>
                {projectData.button3.text}
              </Button>
            }
          </div>
        </div>
      </Col>
      <hr className={"my-3"}/>
    </Row>
  );
}

ProjectInline.propTypes = PROJECT_PROPTYPES;
