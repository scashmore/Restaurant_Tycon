import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';
import AddRestaurants from './AddRestaurants/AddRestaurants'
import Menu from './Menu/Menu'
import EditForm from './EditForm/EditForm';
import './style.css';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [ingreItems, setIngreItems] = useState([]);
    const [show, setShow] = useState(false);

    const [modalId1, setModalId1] = useState('')

    const handleModal = (e) => {
        setModalId1(e.currentTarget.value)

    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let newIngres = [];

    const generateIngres = (number, id, item) => {

        for (var i = 0; i < parseInt(number); i++) {
            newIngres.push({ item: `ingredient` + `${i + 1}`, idIngre: id + `${i}` })
        }
        item.push(newIngres);
        //setIngreItems(ingreItems.push(newIngres));
        console.log(restaurants)

    }

    let newMenu = [];

    const generateRestaurant = (name, cuisine, menu, id) => {

        for (var i = 0; i < parseInt(menu); i++) {
            newMenu.push({ item: `item` + `${i + 1}`, description: 'about item', idx: `${Date.now() + i}`, ingres: [] });
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

    const updateRestaurantName = (value, restId) => {

            var i = restaurants.findIndex(x => x.restId === restId)
            let rest = restaurants[i]

            rest.restName = value;

            setRestaurants([...restaurants.slice(0, i), ...restaurants.slice(i)]);
    };

    const updateRestaurantCuisine = (value, restId) => {

        var i = restaurants.findIndex(x => x.restId === restId)
        let rest = restaurants[i]

        rest.restCuisine = value;

        setRestaurants([...restaurants.slice(0, i), ...restaurants.slice(i)]);
};

    const updateRestaurantMenu = (value, restId) => {
        var index = restaurants.findIndex(x => x.restId === restId)
        let rest = restaurants[index]

        for (var i = 0; i < parseInt(value); i++) {
            newMenu.push({ item: `item` + `${i + 1}`, description: 'about item', idx: `${Date.now() + i}`, ingres: [] });
        }
        setMenuItems(newMenu);
        rest.restMenuNum = parseInt(value);
        rest.restMenu = newMenu;



        setRestaurants([...restaurants.slice(0, index), ...restaurants.slice(index)]);
    }


    const deleteRestaurant = (restId) => {
        const newList = restaurants.filter((restaurants) => restaurants.restId !== restId);
        setRestaurants(newList);
    };

    const deleteMenuItem = (idx) => {
        //restaurnt.menuitem.id idea here
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
                            <div>
                                <Button className="editBtn" variant="link" size="lg" onClick={(e) => { handleShow(); handleModal(e) }} value={restaurants.restId}>✎</Button>
                                <Modal show={show && (modalId1 === restaurants.restId)} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Restaurant</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <EditForm updateRestaurantName={updateRestaurantName} updateRestaurantCuisine={updateRestaurantCuisine} pdateRestaurantMenu={updateRestaurantMenu} handleClose={handleClose} restName={restaurants.restName} restCuisine={restaurants.restCuisine} restMenuNum={restaurants.restMenuNum} restId={restaurants.restId} />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <Button variant="link" onClick={() => deleteRestaurant(restaurants.restId)}>❌</Button>
                        </Card.Title>
                        <Card.Text>
                            {`${restaurants.restName} serves ${restaurants.restCuisine} cuisine and has ${restaurants.restMenuNum} menu items.`}
                        </Card.Text>
                        <Menu generateIngres={generateIngres} restMenu={restaurants.restMenu} menuItems={menuItems} deleteMenuItem={deleteMenuItem} />
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>
    )
}

export default Restaurants
