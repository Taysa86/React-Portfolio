import React from "react";
import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


/*const project1 = {
  title: "",
  text: "",
  image: ,
  link1: "",
};*/

/*const project2 = {
  title: "",
  text: "",
  image: ,
  link1: "",
};*/

/*const project3 = {
  title: "",
  text: "",
  image: ,
  link1: "",
};*/

export default function Portfolio() {
  return (
    <Container fluid>
      <h1>Portfolio</h1>
      <Row className="mt-2">
        <Col md="6" className="mt-2">
          <Project
            title={}
            text={}
            image={}
            link1={}
          />
        </Col>
        <Col md="6" className="mt-2">
          <Project
            title={}
            text={}
            image={}
            link1={}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="6" className="mt-2">
          <Project
            title={}
            text={}
            image={}
            link1={}
          />
        </Col>
        
      </Row>
    </Container>
  );
}