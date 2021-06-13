import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import EditForm from './EditForm/EditForm'

const EditRestaurant = ({generateRestaurant, restName, restCuisine, restMenu, restMenuNum}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button className="editBtn" variant="link" size="lg" onClick={handleShow}>✎</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Restaurant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <EditForm generateRestaurant={generateRestaurant} handleClose={handleClose} restName={restName} restCuisine={restCuisine} restMenu={restMenu} restMenuNum={restMenuNum}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditRestaurant
