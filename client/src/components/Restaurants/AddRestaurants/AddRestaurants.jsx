import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';

import './style.css'

export const AddRestaurants = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [menuItems, setMenuItems] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {

    }
    return (
        <div>
            <Button variant="outline-info" size="lg" onClick={handleShow}>Add Restaurant</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Restuarant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="restForm" onSubmit={handleSubmit}>
                        <label>Restuarant Name:</label>
                        <input type="text"></input>
                        <label>Cuisine Type:</label>
                        <input type="text"></input>
                        <label>Number of Menu Itmes:</label>
                        <input type="number" min='1' max='15'></input>
                        <Button className='formBtn' type='submit' variant="primary" onClick={handleClose}>Add This Restuarant</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddRestaurants