import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/About.css";


export default function About() {
  return (
    <Container fluid>
      <Row>
        <Col md="6" className="txtcol">
            <h1> Full-Stack Web Developer</h1>
          <br />
         
            <p>
             place holder text here.
            </p>

        </Col>
        {/*<Col md="6" className="img">
          <future image here/>
        </Col>*/}
      </Row>
    </Container>
  );
}