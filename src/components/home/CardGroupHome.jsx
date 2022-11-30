import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function CardGroupHome() {
    return (
    <CardGroup>
        <Card bg="success "border="success" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title>For Kids</Card.Title>
            <Card.Text>
                The kid site should be something easily accessible with attractive colors,
                flashy text, or images to get their attention. Ideally the interactive game
                or other resource is a more applicable to them such as how to stay safe online,
                who to avoid, or other things that kids might need to know.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button href="/kids">Kids Page</Button>
            </Card.Footer>
        </Card>
        <Card bg="warning" border="warning" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title>For Adults</Card.Title>
            <Card.Text>
                The adults site should still be engaging but presented more formally than the
                one intended for kids. On one end it has to look age appropraiate as to not 
                "look down on them", but it also has to easy enough the the average boomer
                can figure it out.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button href="/adults">Adults Page</Button>
            </Card.Footer>
        </Card>
        <Card bg="info" border="info" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title>Learn More</Card.Title>
            <Card.Text>
                We might wanna clarify what is going on in here because idk if its learning
                more about the website or if we learning more about how to use the internet.
                If its the first option then we might wanna remove this option and just keep
                it solely in the navbar.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button href="/learning">Learn More Page</Button> 
            </Card.Footer>
        </Card>
        <Card bg="danger" border="danger" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title>Resources</Card.Title>
            <Card.Text>
                The resources site will probably be easiest to make, the only annoying part is
                probably trying to find content to populate it with. Should this page looj more
                like an index in a book or will it just be floating cards like the ones below?{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button href="/resources">Resources Page</Button>
            </Card.Footer>
        </Card>
    </CardGroup>

    );
}

export default CardGroupHome;