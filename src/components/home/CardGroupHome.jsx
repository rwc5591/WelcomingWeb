import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './home.css';

function CardGroupHome() {
    return (
    <CardGroup>
        <Card className="kidCard" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title>For Kids</Card.Title>
            <Card.Text>
               Looking to explore the web? We have resources that are fun, educational, and safe to explore! Click below to start your internet adventure!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className="shadowButton" href="/kids">Go to Kids Page</Button>
            </Card.Footer>
        </Card>
        <Card className="adultCard" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title>For Adults</Card.Title>
            <Card.Text>
                Need help navigating the internet? We have resources that are educational and will solve all your quesitons about the internet today. Click below!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className="shadowButton" href="/adults">Go to Adults Page</Button>
            </Card.Footer>
        </Card>
        <Card className="learnCard" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title>Learn More</Card.Title>
            <Card.Text>
                Have someone in mind? If you want to learn how to teach someone about the internet, or help others with internet-related issues, click below.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className="shadowButton" href="/learning">Go to Learn More Page</Button> 
            </Card.Footer>
        </Card>
        <Card className="resourcesCard" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title>Resources</Card.Title>
            <Card.Text>
                Are you on a similar mission? The resources page is filled with educational websites similar to ours. Click the button below if you want to explore!
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className="shadowButton" href="/resources">Go to Resources Page</Button>
            </Card.Footer>
        </Card>
    </CardGroup>

    );
}

export default CardGroupHome;