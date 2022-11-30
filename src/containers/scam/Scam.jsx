import React, {useState} from 'react'
import './scam.css'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import kidResources from './kidResources.json'
import Card from 'react-bootstrap/Card';

const Scam = () => {
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
        <Carousel.Item>
          
        <img width={900} height={500}
            className="d-block w-100"
          src="goPhish.jpg"
            alt="First slide" />
        <Carousel.Caption>
          <h3 > <a href='/GoPhish'>Go Phish!</a></h3>
          <p>Can you tell which one is a scam? <a href='/GoPhish'>Click here to play</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
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
      </Carousel.Item> */}
    </Carousel>
    <Container>
      <Row>
        <Col>
            <h2>Welcome to the Web! </h2>
            <h3>Things to check for: </h3>
            <p>
              
              <ul className='list'>
                <li>Anonymous sources offering quick cash or large amounts of money</li>
                <li>Emails with suspicious domains (domains being anything following the @)</li>
                <li>It requires you to respond quickly which can make you make worse decisions </li>
                <li>Asks to Click on a link or download something</li>
                <li>From well known companies but with misspelled</li>
                <li>Emails claiming to be government agencies with non ‘.gov’ email addresses</li>
                <li>With characters your computer does not recognize</li>
                <li>Emails telling you to download content you did not ask for and can’t verify</li>
                <li>Calls from unknown numbers</li>
                <li>Emails claiming to be an entity from a random email</li>
                <li>Texts claiming identities you were not suspecting </li>
                <li>Overcomplicated links</li>
                <li>Contains a threat if you don't act on email</li>
                <li>Not addressed to you directly</li>
                <li>Spelling or grammar mistakes</li>
                <li>Random content offering money, sex, or job opportunities from unknown sources</li>
                <li>Websites that automatically download things for you that you didn’t request</li>
                

              </ul></p></Col>
        {/* <Col><h2>Resources</h2>
        <div> {resources} </div>
        </Col> */}

      </Row>
    </Container>
    </div>
  );
}

export default Scam