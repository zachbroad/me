import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Bio = () => (
  <Container>
    <h2>About</h2>
    <hr/>
    <Row>
      <Col md={12}>
        <p>Self-taught software developer with a wide range of programming skills.</p>
        <p>Proven expertise in developing full-stack mobile and web applications, building and managing websites, and various other personal projects.</p>
        <p>Highly adept at problem-solving, optimizing performance, and using SEO strategies to drive website traffic.</p>
        <p>Seeking to leverage skills and experiences to solve challenging problems in a dynamic team environment.</p>
      </Col>
    </Row>
  </Container>
);

export default Bio;