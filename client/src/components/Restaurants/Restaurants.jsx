import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';
import AddRestaurants from './AddRestaurants/AddRestaurants'
import Menu from './Menu/Menu'
import './style.css'

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    let newMenu = [];

    const generateRestaurant = (name, cuisine, menu) => {
        for (var i = 0; i < parseInt(menu); i++) {
            newMenu.push({ item: `'item + ${i+1}'`, description: 'about item' });
        };
        console.log(newMenu);

        setRestaurants(restaurants.concat(
            {
                restName: name.charAt(0).toUpperCase() + name.slice(1),
                restCuisine: cuisine.charAt(0).toUpperCase() + cuisine.slice(1),
                restMenu: parseInt(menu)
            }));

        setMenuItems(newMenu);
    }

    const deleteRestaurant = (name) => {
        const newList = restaurants.filter((restaurants) => restaurants.name !== name);
        setRestaurants(newList);
    }

    const deleteMenuItem = (item) => {
        const newList = menuItems.filter((menuItems) => menuItems.item !== item);
        setMenuItems(newList);
    }


    return (
        <div>
            <AddRestaurants generateRestaurant={generateRestaurant} />
            <div className="rest">
                {restaurants.map((restaurant, index) => (<Card className="card" key={index}>
                    <Card.Body>
                        <Card.Title className="title">
                            <div>{`${restaurant.restName}`}</div>
                            <Button variant="link">✎</Button>
                            <Button variant="link" onClick={() => deleteRestaurant(restaurant.name)}>❌</Button>
                        </Card.Title>
                        <Card.Text>
                            {`${restaurant.restName} serves ${restaurant.restCuisine} cuisine and has ${restaurant.restMenu} menu items.`}
                        </Card.Text>
                       <Menu menuItems={menuItems} deleteMenuItem={deleteMenuItem}/>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>
    )
}

export default Restaurants
