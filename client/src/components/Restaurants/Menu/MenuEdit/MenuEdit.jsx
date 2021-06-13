import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const MenuEdit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button className="editBtn" variant="link" size="lg" onClick={handleShow}>✎</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Menu Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MenuEdit
