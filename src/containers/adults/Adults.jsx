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
import Quiz from '../../components/phishingQuiz/Quiz';

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
        <img width={200} height={400}
          className= "d-block w-100"
          src="goPhish.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h3><a href='/GoPhish'>Go Phish!</a></h3>
          <p>Can you tell which one is a scam? <a href='/GoPhish'>Click here to play</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={200} height={400}
          className="d-block w-100"
            src="learnabot.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3><a href="https://all.rit.edu/">Learn about accessibility</a></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={200} height={400}
          className="d-block w-100"
          src="ludovic-toinel-nGwyaWKFRVI-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3><a href="https://www.connectsafely.org/">Connect Safely</a></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
      <Row>
        <Col>
        <h2> Welcome to the Web! </h2>
        <p> No matter your age, it's always a good practice to learn about the internet! 
              If you're a beginner, why not check out some of our resources? Or play our new <a href='/GoPhish'>GO PHISH!</a> game?</p>
            <br />
            <br />
            <h3><a href='/GoPhish'>Go Phish!</a></h3>
            <img width={200} height={300} 
           src="goPhish.jpg"  />
          
            
             
          
          </Col>
        <Col><h2>Resources</h2>
        <div> {resources} </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}


export default Adults