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
          src="learnabot.png"
          alt="First slide" />
        <Carousel.Caption>
          <h3>Accessible Learning Labs</h3>
          <p>Learn about other people's experiences on the web.</p>
          <a href= "https://all.rit.edu/">  <button className="carouselButton" type="button"> Go to site</button></a>
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
          <h3>Online Safety for Parents</h3>
          <p>It's natural to want to keep your kids safe! Learn all the ways you could help them explore safely.</p>
          <a href= "https://kidshealth.org/en/parents/net-safety.html">  <button className="carouselButton" type="button"> Go to site</button></a>
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
            Want to help teach kids how to code? Check out the teacher page on code.org!
          </p>
          <a href= "https://code.org/">  <button className="carouselButton" type="button"> Go to site</button></a>
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