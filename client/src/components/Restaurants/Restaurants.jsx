import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button, Modal } from 'react-bootstrap';
import AddRestaurants from './AddRestaurants/AddRestaurants'
import Menu from './Menu/Menu'
import EditForm from './EditForm/EditForm';
import './style.css';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('/restaurants')
            .then(response => setRestaurants(response.data.restaurants));
    }, []);
    useEffect(() => {
        axios.post('/api/restaurant', `${restaurants}`)
            .then(response => setRestaurants(response.data.restaurant));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    useEffect(() => {
        // DELETE request using axios inside useEffect React hook
        axios.delete('/api/restaurant/_id')
            .then(() => setRestaurants(restaurants.filter((restaurants) => restaurants.restId !== restId)));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    useEffect(() => {
        // PUT request using axios inside useEffect React hook
        const name = { restName: ""  };
        axios.put('api/retaurant/_id', name)
            .then(response => setRestaurants(response.data.restaurant_id));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    const [show, setShow] = useState(false);

    const [modalId1, setModalId1] = useState('')
    
    let newMenu = [];
    let newIngres = [];

    const handleModal = (e) => {
        setModalId1(e.currentTarget.value)

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const generateIngres = (number, id, item) => {
        newIngres = [];
        for (var i = 0; i < parseInt(number); i++) {
            newIngres.push("ingredient" + ` ` + `${i + 1}`)
        }
        item.splice(0, item.length, ...newIngres);

    }    

    const generateRestaurant = (name, cuisine, menu, id) => {
        for (var i = 0; i < parseInt(menu); i++) {
            newMenu.push({ item: `item` + `${i + 1}`, description: 'about item', idx: `${Date.now() + i}`, ingres: [] });
        };
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
    }

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

    const updateMenuItem = (value, idx) => {
        //     // idea
        //     // restaurants.findIndex(({restMenu}) => restMenu.findIndex(x => x.idx === idx)
        const menuItem = restaurants.find(({ restMenu }) => restMenu.find((menu) => menu.idx === idx))
        //     // var index = restaurants[i].restMenu.findIndex(x => x.idx === idx)
        //     // let rest = restaurant[i]
        //     // let item = restMenu[index]
        //     // let new = rest.item
        menuItem.item = value

        //     // setRestaurants([...restaurants.slice(0, i), ...restaurants.slice(i)])


    }

    // const findIndexOfMenuIdx = (menu, idx) => {menu.findIndex(x => x.idx === idx)};

    // const updateMenuItem =(value, idx) => {
    //     // Find the restaurant with an item that has the specified idx
    //     const restIndex = restaurants.findIndex(({restMenu}) => findIndexOfMenuIdx(restMenu, idx));
    //     const rest = restaurants[restIndex];
    //     // Update the item
    //     const menuItemIndex = findIndexOfMenuIdx(rest.restMenu, idx);
    //     const item = restMenu[menuItemIndex];
    //     const newItem = { ...item }; // Don't want to mutate the original object
    //     newItem.menuItem = value;
    //     // Update the menu
    //     const newMenu = [...rest.restMenu];
    //     newMenu[menuItemIndex] = newItem;
    //     // Passing setRestaurants a callback might be unnecessary here.
    //     setRestaurants((state) => [...state.slice(0, restIndex), {...rest, restMenu: newMenu}, ...state.slice(restIndex + 1)]);
    // }

    const deleteRestaurant = (restId) => {
        const newList = restaurants.filter((restaurants) => restaurants.restId !== restId);
        setRestaurants(newList);
    };

    const deleteMenuItem = (idx) => {
        //find restaurant index
        //const menuItem = restaurants.filter(({ restMenu }) => restMenu.filter((menu) => menu.idx === idx))

        //delete index from restMenu
        // var index = restaurants.restMenu.findIndex(x => x.idx === idx)
        // restaurants.restMenu.splice(index);

        //setRestaurants(menuItem);
    };


    return (
        <div>
            <AddRestaurants generateRestaurant={generateRestaurant} />
            <div className="rest">
                {restaurants.map((restaurants, index) => (
                    <Card className="card" key={index}>
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
                            <Menu generateIngres={generateIngres} updateMenuItem={updateMenuItem} restMenu={restaurants.restMenu} deleteMenuItem={deleteMenuItem} />
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
};

export default Restaurants
