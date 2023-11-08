import Layout from "./Layout.jsx";
import {Button, Col, Form, Row} from "react-bootstrap";

const ContactPage = () => (
    <Layout>
      <Row>
        <Col className={"my-2 d-flex justify-content-center"}>
          <div style={{maxWidth: 960}}>
            <div className="d-flex flex-column align-items-center my-4">
              <h1>Contact Me</h1>
              <p>
                The best way to reach me is to
                <a href="https://www.linkedin.com/in/zachbroad/">message me on LinkedIn</a>
                — but you can also leave your contact details here and I'll get back to you.
              </p>
            </div>

            <hr width={67} style={{borderStyle: "dashed", marginBottom: "1.0rem"}}/>

            <Form name="contact" method="POST" netlify>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Details</Form.Label>
                <Form.Control as="textarea" name="details" rows={6}/>
              </Form.Group>

              <Button variant="success" type="submit">Send</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Layout>
  )
;

export default ContactPage;
