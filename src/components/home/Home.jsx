import './home.css'
import CardGroupHome from './CardGroupHome';
import { useState } from 'react';
import ResourceList from './ResourceList';

const Home = () => {
    const[resources, setResources] = useState([
        { title: 'Ablegamers', body: 'Video games need to be more accessible! If you want to learn more, visit Ablegamers and see their mission.', url: 'https://ablegamers.org/', id:1},
        { title: 'Card 2', body: 'lorem ipsum', url: 'null', id:2},
        { title: 'Card 3', body: 'lorem ipsum', url: 'null', id:3},
        { title: 'Submit your own info!', 
        body: 'do you believe you have something you relate to or that would be important for someone to know? Submit it here', url: 'null', id:4},
        { title: 'Code.org', body: 'Code.org is a great way for younger kids to start learning how to code.', url: 'https://code.org/', id:5},
    ]);

    return(
        <div className="Content">
            <h1> Welcome to Welcoming Web!</h1>
            <CardGroupHome />
            <ResourceList resources={resources}/>
        </div>
    );
}

export default Home