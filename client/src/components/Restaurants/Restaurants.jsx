import React, { useState } from 'react'
import { Card, Button} from 'react-bootstrap';
import AddRestaurants from './AddRestaurants/AddRestaurants'
import Menu from './Menu/Menu'
import EditRestaurant from './EditRestaurant/EditRestaurant'
import './style.css'

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [ingreItems, setIngreItems] = useState([]);

    let newIngres = [];

        const generateIngres = (number, id, item) => {
            
            for (var i = 0; i < parseInt(number); i++) {
                newIngres.push({item: `ingredient` + `${i+1}`, idIngre: id })
            }
            item.push(newIngres);
            setIngreItems(ingreItems.push(newIngres));
            console.log(restaurants)

    }

    let newMenu = [];

    const generateRestaurant = (name, cuisine, menu, id) => {
        
        for (var i = 0; i < parseInt(menu); i++) {
            newMenu.push({ item: `item` + `${i+1}`, description: 'about item', idx: `${Date.now()+i}`, ingres: [] });
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
            console.log(restaurants)
    }

    const updateRestaurant = (restId) => {
        
    };


    const deleteRestaurant = (restId) => {
        const newList = restaurants.filter((restaurants) => restaurants.restId !== restId);
        setRestaurants(newList);
    };

    const deleteMenuItem = (idx) => {
        const newList = menuItems.filter((menuItems) => menuItems.idx !== idx);
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
                            <Button variant="link" onClick={() => deleteRestaurant(restaurants.restId)}>❌</Button>
                        </Card.Title>
                        <Card.Text>
                            {`${restaurants.restName} serves ${restaurants.restCuisine} cuisine and has ${restaurants.restMenuNum} menu items.`}
                        </Card.Text>
                       <Menu generateIngres={generateIngres} restMenu={restaurants.restMenu} menuItems={menuItems} deleteMenuItem={deleteMenuItem}/>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>
    )
}

export default Restaurants
