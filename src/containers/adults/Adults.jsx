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
      <Card className="adultResourceCard" key ={resources.id}>
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
    <div className="aCarousel">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="getcoding.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="getcoding.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="getcoding.jpg"
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