import './home.css'
import CardGroupHome from './CardGroupHome';
import { useState } from 'react';
import ResourceList from './ResourceList';

const Home = () => {
    const[resources, setResources] = useState([
        { title: 'Card 1', body: 'lorem ipsum', url: 'null', id:1},
        { title: 'Card 2', body: 'lorem ipsum', url: 'null', id:2},
        { title: 'Card 3', body: 'lorem ipsum', url: 'null', id:3},
        { title: 'Card 4', body: 'lorem ipsum', url: 'null', id:4},
        { title: 'Submit your own info!', 
            body: 'do you believe you have something you relate to or that would be important for someone to know? Submit it here', url: 'null', id:5},
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