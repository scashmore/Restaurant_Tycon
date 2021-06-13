import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

import './style.css'
const Menu = (restNewMenu) => {
    const [show, setShow] = useState(false);
    const [menuItems, setMenuItems] = useState(restNewMenu);
   


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
                        {menuItems.map((index) => {
                            return <li key={index}>
                                {menuItems.item}
                                <Button variant="link">✎</Button>
                            </li>
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
