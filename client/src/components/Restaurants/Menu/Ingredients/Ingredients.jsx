import React from 'react';
import {Modal} from 'react-bootstrap';
// import Modal from 'react-overlays/Modal';

const Ingredients = (ingreItems) => {
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
                        {ingreItems.map((ingreItems, index) => {
                            return <li key={index}>
                                <h4 className='item'>
                                {ingreItems.item}
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
