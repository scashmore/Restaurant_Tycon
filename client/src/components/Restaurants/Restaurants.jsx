import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap';
import AddRestaurants from './AddRestaurants/AddRestaurants'
import Menu from './Menu/Menu'
import './style.css'

const Restaurants = () => {
const [restaurants, setRestaurants] = useState([]);

    const generateRestaurant = (name, cuisine, menu) => {
       setRestaurants(restaurants.concat({restName: name.charAt(0).toUpperCase() + name.slice(1), restCuisine: cuisine.charAt(0).toUpperCase() + cuisine.slice(1), restMenu: parseInt(menu)}));
        console.log(restaurants)
    }


    return (
        <div>
            <AddRestaurants generateRestaurant={generateRestaurant}/>
            <div className="rest">
            {restaurants.map((restaurants, index) => ( <Card className="card" key={index}>
                <Card.Body>
                <Card.Title className="title">
                    <div>{`${restaurants.restName}`}</div>
                    <Button variant="link">✎</Button>
                </Card.Title>
                <Card.Text>
                   {`${restaurants.restName} serves ${restaurants.restCuisine} cuisine and has ${restaurants.restMenu} menu items.`}
                </Card.Text>
                <Menu />
                </Card.Body>
            </Card>
            ))}
            </div>
        </div>
    )
}

export default Restaurants
