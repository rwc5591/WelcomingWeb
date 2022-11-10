import React from 'react'
import './about.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 

const About = () => {
  return (
    <Container>
      <Row>
        <div className="Intro">
        <h2> Making the internet accessible to all </h2>
        <p>Welcoming Web is a project made for SWEN 102 to further increase our understanding of React and JavaScript. We wanted to create a website where people can find safe and easy-to-understand resources so that everyone can use the internet with ease!</p>
        </div>
      </Row>
      <Row>
        <Col>
        <h2>Jade Condez</h2>
        </Col>
        <Col>
        <h2>Flynn Djan</h2>
        </Col>
        <Col>
        <h2>Harry Guiracoche</h2>
        </Col>
        <Col>
        <h2>Reg Chuhi</h2>
        </Col>

      </Row>
    </Container>
  )
}

export default About