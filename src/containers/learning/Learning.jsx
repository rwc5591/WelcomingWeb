import React, {useState}from 'react'
import './learning.css'
import {Resources} from '../../containers';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import learningResources from './learningResources.json';
import Card from 'react-bootstrap/Card';

const Learning = () => {
  return (
    ImportantInfoCarousel()
  )
}

function ImportantInfoCarousel(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const resources= learningResources.map((resources) => {
    return(
      <Card className="learningResourceCard" key ={resources.id}>
      <Card.Body>
      <Card.Title>{resources.name}</Card.Title>
      <Card.Text>{resources.desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button className="resourceCardButton" href={resources.url}> Go to Website
      </Button>
      </Card.Footer>
    </Card>
    );
    }
  )


  return(
   <div className="learningCarousel">
    <Carousel activeIndex={index} onSelect={handleSelect} className="carouselTest">
      <Carousel.Item>
        <img width={200} height={300}
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
        width={200} height={400}
          className="d-block w-100"
          src="robot.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3><a href="https://kids.nationalgeographic.com/">National Geographic</a></h3>
          <p><a href="https://kids.nationalgeographic.com/">Learn and play games</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={200} height={400}
          className="d-block w-100"
          src="getcoding.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Learn to code</h3>
          <p>
            Coding for beginners.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
      <Row>
        <Col>
        <h2> Welcoming Web: Learning </h2>
        <p> The internet is a wonderful resource, so wouldn't it be wonderful if everybody could experience it? We have a variety of resources here to help your journey in teaching/helping others to explore.</p>
        </Col>
        <Col className="phishCont"><h2>Resources</h2>
        <div className="cardBox"> {resources} </div>
        </Col>

      </Row>
    </Container>
    </div>
  );
}


export default Learning