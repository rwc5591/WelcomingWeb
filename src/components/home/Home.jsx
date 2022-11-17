import React, {useState}from 'react'
import './home.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    return (
      cardGroup()
    )
  }
 
  function cardGroup() {
    return (
    <CardGroup>
    <Card border="success" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>For Kids</Card.Title>
        <Card.Text>
            The kid site should be something easily accessible with attractive colors,
            flashy text, or images to get their attention. Ideally the interactive game
            or other resource is a more applicable to them such as how to stay safe online,
            who to avoid, or other things that kids might need to know.
        </Card.Text>
        <Card.Link href="/kids">Redirect To Kids</Card.Link>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
    </Card>
    <Card border="warning" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>For Adults</Card.Title>
        <Card.Text>
            The adults site should still be engaging but presented more formally than the
            one intended for kids. On one end it has to look age appropraiate as to not 
            "look down on them", but it also has to easy enough the the average boomer
            can figure it out.{' '}
        </Card.Text>
        <Card.Link href="/adults">Redirect to Adults</Card.Link>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
    </Card>
    <Card border="info" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Learn More</Card.Title>
        <Card.Text>
            We might wanna clarify what is going on in here because idk if its learning
            more about the website or if we learning more about how to use the internet.
            If its the first option then we might wanna remove this option and just keep
            it solely in the navbar.
        </Card.Text>
        <Card.Link href="/learning">Redirect to Learn More</Card.Link>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
    </Card>
    <Card border="danger" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Resources</Card.Title>
        <Card.Text>
            The resources site will probably be easiest to make, the only annoying part is
            probably trying to find content to populate it with. Should this page looj more
            like an index in a book or will it just be floating cards like the ones below?{' '}
        </Card.Text>
        <Card.Link href="/resources">Redirect to Resources</Card.Link>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
    </Card>
    </CardGroup>
      
    );
    }

function resourceCards() {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Resource Title 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Type of Resources</Card.Subtitle>
                <Card.Text>
                Short Description
                </Card.Text>
                <Card.Link href="#">Link to Resource</Card.Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Resource Title 2</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Type of Resources</Card.Subtitle>
                <Card.Text>
                Short Description
                </Card.Text>
                <Card.Link href="#">Link to Resource</Card.Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Resource Title 3</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Type of Resources</Card.Subtitle>
                <Card.Text>
                Short Description
                </Card.Text>
                <Card.Link href="#">Link to Resource</Card.Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Resource Title 4</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Type of Resources</Card.Subtitle>
                <Card.Text>
                Short Description
                </Card.Text>
                <Card.Link href="#">Link to Resource</Card.Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Resource Title 5</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Type of Resources</Card.Subtitle>
                <Card.Text>
                Short Description
                </Card.Text>
                <Card.Link href="#">Link to Resource</Card.Link>
            </Card.Body>
        </Card>
    </>
    
  );
}

export default Home