import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap';
import AddRestaurants from './AddRestaurants/AddRestaurants'
import Menu from './Menu/Menu'
import './style.css'

const Restaurants = () => {
const [restaurants, setRestaurants] = useState([]);

    const generateRestaurant = (name, cuisine, menu) => {
        let restName = name;
        let restCuisine = cuisine;
        let restMenu = parseInt(menu);

        <Card className="card">
                <Card.Body>
                <Card.Title className="title">
                    <div>{restName}</div>
                    <Button variant="link">✎</Button>
                </Card.Title>
                <Card.Text>
                    {restName} serves {restCuisine} and has {restMenu} menu items.
                </Card.Text>
                <Menu restMenu={restMenu}/>
                </Card.Body>
            </Card>
        console.log('working')
    }


    return (
        <div>
            <AddRestaurants generateRestaurant={generateRestaurant}/>
            <div className="rest">
            <Card className="card">
                <Card.Body>
                <Card.Title className="title">
                    <div>Restaurant</div>
                    <Button variant="link">✎</Button>
                </Card.Title>
                <Card.Text>
                    This Restaurant serves something cuisine
                </Card.Text>
                <Menu />
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Restaurants
