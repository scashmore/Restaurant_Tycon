import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
// import Modal from 'react-overlays/Modal';

import './style.css'
const Menu = ({ menuItems, deleteMenuItem }) => {
    const [show, setShow] = useState(false);
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
                {menuItems.map((menuItems, index) => {
                            return <li key={index}>
                                <h4 className='item'>
                                    {menuItems.item}
                                    <Button variant="link">✎</Button>
                                    <Button variant="link" onClick={() => deleteMenuItem(menuItems.item)}>❌</Button>
                                </h4>
                                <p>
                                    {menuItems.description}
                                </p>
                                {/* <Ingredients /> */}
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
