import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

import './style.css'
const Menu = (restMenu) => {
    const [show, setShow] = useState(false);
    const [menuItems, setMenuItems] = useState(restMenu);
    let menu = [];
    

    for(var i=0; i<menuItems; i++) {
    menu = menu.push({item: 'item', description: 'about item'})
    console.log(menu);
    };
   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="menu">
            <Button className="menuBtn" variant="outline-info" size="sm" onClick={handleShow}>Menu</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {menu.map((index) => {
                            return <li key={index}>{menu.item}</li>
                        })}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Menu
