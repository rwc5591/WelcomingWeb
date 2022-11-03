import React, {useState}from 'react'
import './adults.css'
import {Resources} from '../../containers'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import adultResources from './resources/adultResources.json';
import Card from 'react-bootstrap/Card';

const Adults = () => {
  return (
    ImportantInfoCarousel()
  )
}

function ImportantInfoCarousel(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const resources= adultResources.map((resources) => {
    return(
      <Card key ={resources.id}>
        <Card.Body>
        <Card.Title>{resources.name}</Card.Title>
        <Card.Text>{resources.desc}</Card.Text>
        <a className="btn-primary"
        href={resources.url}>
          Go to Website
        </a>
        </Card.Body>
      </Card>
    );
    }
  )


  return(
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img width={900} height={500}
          className= "d-block w-100"
          src="goPhish.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h3>Go Phish!</h3>
          <p>Can you tell which one is a scam? <a href='/GoPhish'>Click here to play</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={900} height={500}
          className="d-block w-100"
          src="ImagePlaceholder.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={900} height={500}
          className="d-block w-100"
          src="ImagePlaceholder.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
      <Row>
        <Col>
        <h2> Welcome to the Web! </h2>
        <p> Here's what you need to know...</p></Col>
        <Col><h2>Resources</h2>
        <div> {resources} </div>
        </Col>

      </Row>
    </Container>
    </div>
  );
}


export default Adults