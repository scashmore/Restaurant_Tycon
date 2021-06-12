import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import RestuarantForm from './RestuarantForm/RestaurantForm';



export const AddRestaurants = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="outline-info" size="lg" onClick={handleShow}>Add Restaurant</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Restaurant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <RestuarantForm handleClose={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddRestaurants