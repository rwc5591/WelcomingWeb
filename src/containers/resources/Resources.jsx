import React, {useState}from 'react'
import './resources.css'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import resourcesData from './resourcesData.json';
import Card from 'react-bootstrap/Card';

const Resources = () => {
  return (
    ImportantInfoCarousel()
  )
}

function ImportantInfoCarousel(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const resources= resourcesData.map((resources) => {
    return(
      <Card className="reResourceCard" key ={resources.id}>
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
   <div className="resourceCarousel">
    <Carousel activeIndex={index} onSelect={handleSelect} className="carouselTest">
      <Carousel.Item>
        <img width={200} height={300}
          className= "d-block w-100"
          src="accessiblesyllabus.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h3>Accessible Syllabus</h3>
          <p>A compilation of education and accessibility resources! </p>
          <a href= "https://www.accessiblesyllabus.com/">  <button className="carouselButton" type="button"> Go to site</button></a>
        </Carousel.Caption>
      </Carousel.Item>
     {/**  <Carousel.Item>
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
  </Carousel.Item> */};
    </Carousel>
    <Container>
      <Row>
        <Col>
        <h2> Resources </h2>
        <p> Many websites have a similar mission to ours: to educate and show people the various aspects of life and the internet.
          We have a variety of websites here that are similar to ours to explore! If you're a developer like us at Welcoming Web, you may also want to find resources
        that can point you in a similar direction of accessibility.</p>
        </Col>
        <Col className="phishCont"><h2>Resources</h2>
        <div className="cardBox"> {resources} </div>
        </Col>

      </Row>
    </Container>
    </div>
  );
}


export default Resources