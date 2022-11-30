import React, {useState} from 'react'
import './kids.css'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import kidResources from './kidResources.json'
import Card from 'react-bootstrap/Card';

const Kids = () => {
  return (
    ImportantInfoCarousel()
  )
}

function ImportantInfoCarousel(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const resources= kidResources.map((resources) => {
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
      {/* <Carousel.Item>
        <img width={900} height={500}
          className= "d-block w-100"
          src="goPhish.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h3>Go Phish!</h3>
          <p>Can you tell which one is a scam? <a href='/GoPhish'>Click here to play</a></p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
        width={400} height={500}
          className="d-block w-100"
          src="robot.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>National Geographic</h3>
          <p>Learn and play games</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={300} height={500}
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
        <h2> Welcome to the Web! </h2>
        <p> No matter your age, it's always a good practice to learn about the internet! 
          If you're a beginner, why not check out some of our resources? Or play our new GoPhish game?</p></Col>
        <Col><h2>Resources</h2>
        <div> {resources} </div>
        </Col>

      </Row>
    </Container>
    </div>
  );
}

export default Kids