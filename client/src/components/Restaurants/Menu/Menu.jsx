import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import Ingredients from './Ingredients/Ingredients';
import IngredientsForm from './Ingredients/IngredientsForm/IngredientsForm'
import MenuEdit from './MenuEdit/MenuEdit'

import './style.css'
const Menu = ({ restMenu, menuItems, deleteMenuItem, generateIngres }) => {
    const [show, setShow] = useState(false);

    const [modalId, setModalId] = useState('')
    
    const handleModal = (e) =>{
        setModalId(e.currentTarget.value)
        
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className="menu">

            <Card className="menuCard">
                <Card.Title className="menuTitle">Menu</Card.Title>
                <ul>
                    {restMenu.map((restMenu) => {
                        return <li key={restMenu.idx}>
                            <h6 className='item'>
                                {restMenu.item}
                                <MenuEdit menuItem={restMenu.item} menuDescrip={restMenu.description} />
                                <Button variant="link" onClick={() => deleteMenuItem(menuItems.idx)}>❌</Button>
                            </h6>
                            <p>
                                {restMenu.description}
                                {restMenu.ingres.length}
                            </p>
                            {(restMenu.ingres.length < 1) ?
                            <>
                                <Button className="ingreBtn" variant="outline-info" size="lg" onClick={(e)=> {handleShow(); handleModal(e)}} value={restMenu.idx}>Add Ingredients</Button>
                                <Modal show={show && (modalId === restMenu.idx) } onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Ingredients</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <IngredientsForm item={restMenu.ingres} thing={restMenu.idx} restMenu={restMenu} generateIngres={generateIngres} handleClose={handleClose}/>
                                </Modal.Body>
                                <Modal.Footer>
                                 <Button variant="secondary" onClick={handleClose}>Close</Button>
                                 </Modal.Footer>
                                </Modal>
                            </>
                                :
                                <Ingredients  ingres={restMenu.ingres} />    
                                
                            }
                                    
                        </li>
                    })}
                </ul>
            </Card>
        </div>
    )
}

export default Menu
