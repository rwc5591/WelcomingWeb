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
<<<<<<< HEAD
    return (
    <div className='Resources' id='Resources'>
    <h2>Resources</h2>
    <br></br>
        <h3>Helpful Links</h3>   <br />         
        <a href='https://www.connectsafely.org/medialiteracy/'>Connect Safely</a><br />
            <a href="https://applieddigitalskills.withgoogle.com/c/en/artandgames">Applied Digital Skills</a> <br />
            <a href=" https://owl.purdue.edu/owl/job_search_writing/">Job Application Resources</a> <br />
            
    </div>
    )
=======
  return (
    ImportantInfoCarousel()
  )
>>>>>>> fc356df08b16ded3d87724cccd55c6fca8baf47b
}

function ImportantInfoCarousel(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const resources= resourcesData.map((resources) => {
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


export default Resources