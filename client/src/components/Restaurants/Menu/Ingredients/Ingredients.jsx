import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './style.css';

const Ingredients = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        
        <div className="ingre">
            <Button className="ingreBtn" variant="outline-info" size="sm" onClick={handleShow}>Ingredients</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingredients</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <ul>
                        {ingres.map((ingres, id) => {
                            return <li key={id}>
                                <h4 className='item'>
                                {ingres.ingredient}
                                <Button variant="link">✎</Button>
                                </h4>
                            </li>
                        })}
                    </ul> */}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Ingredients
