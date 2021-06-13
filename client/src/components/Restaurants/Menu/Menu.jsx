import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';

import './style.css'
const Menu = ({ restMenu, deleteMenuItem }) => {
    const [show, setShow] = useState(false);
    //const [ingreItems, setIngreItems] = useState([]);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className="menu">

            <Card className="menuCard">
                <Card.Title className="menuTitle">Menu</Card.Title>
                    <ul>
                        {restMenu.map((restMenu, index) => {
                            return <li key={index}>
                                <h6 className='item'>
                                    {restMenu.item}
                                    <Button variant="link">✎</Button>
                                    <Button variant="link" onClick={() => deleteMenuItem(restMenu.item)}>❌</Button>
                                </h6>
                                <p>
                                    {restMenu.description}
                                </p>
                                {/* <Ingredients /> */}
                            </li>
                        })}
                    </ul>
                </Card>
        </div>
    )
}

export default Menu
