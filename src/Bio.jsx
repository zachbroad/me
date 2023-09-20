import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Bio = () => (
  <Container className="text-center">
    <h2>About Me</h2>
    <Row>
      <Col md={12}>
        <p>Software developer with a wide range of programming skills.</p>
        <p>Experience in developing full-stack mobile and web applications, building and managing websites, and various other personal projects.</p>
        <p>Seeking to leverage skills and experiences to solve challenging problems in a dynamic team environment.</p>
      </Col>
    </Row>
  </Container>
);

export default Bio;