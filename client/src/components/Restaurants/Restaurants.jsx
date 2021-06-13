import React, { useState } from 'react'
import { Card, Button} from 'react-bootstrap';
import AddRestaurants from './AddRestaurants/AddRestaurants'
import Menu from './Menu/Menu'
import EditRestaurant from './EditRestaurant/EditRestaurant'
import './style.css'

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    let newMenu = [];

    const generateRestaurant = (name, cuisine, menu, id) => {

        

        for (var i = 0; i < parseInt(menu); i++) {
            newMenu.push({ item: `item` + `${i+1}`, description: 'about item', idx: `${Date.now()+i}` });
        };
        console.log(newMenu);
        setMenuItems(newMenu);

        setRestaurants(restaurants.concat(
            {
                restName: name.charAt(0).toUpperCase() + name.slice(1),
                restCuisine: cuisine.charAt(0).toUpperCase() + cuisine.slice(1),
                restMenu: newMenu,
                restMenuNum: parseInt(menu),
                restId: id
                
            }));

    }

    const updateRestaurant = (restId) => {
        
    };


    const deleteRestaurant = (restId) => {
        const newList = restaurants.filter((restaurants) => restaurants.restId !== restId);
        setRestaurants(newList);
    };

    const deleteMenuItem = (item) => {
        const newList = menuItems.filter((menuItems) => menuItems.item !== item);
        setMenuItems(newList);
    };


    return (
        <div>
            <AddRestaurants generateRestaurant={generateRestaurant} />
            <div className="rest">
                {restaurants.map((restaurants, index) => (<Card className="card" key={index}>
                    <Card.Body>
                        <Card.Title className="title">
                            <div>{`${restaurants.restName}`}</div>
                            <EditRestaurant generateRestaurant={generateRestaurant} restName={restaurants.restName} restCuisine={restaurants.restCuisine} restMenu={restaurants.restMenu} restMenuNum={restaurants.restMenuNum} />
                            <Button variant="link" onClick={() => deleteRestaurant(restaurants.restName)}>❌</Button>
                        </Card.Title>
                        <Card.Text>
                            {`${restaurants.restName} serves ${restaurants.restCuisine} cuisine and has ${restaurants.restMenuNum} menu items.`}
                        </Card.Text>
                       <Menu restMenu={restaurants.restMenu} deleteMenuItem={deleteMenuItem}/>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>
    )
}

export default Restaurants
