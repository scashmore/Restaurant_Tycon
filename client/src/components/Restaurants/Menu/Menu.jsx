import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import MenuEdit from './MenuEdit/MenuEdit'

import './style.css'
const Menu = ({ restMenu, menuItems, deleteMenuItem }) => {
    const [show, setShow] = useState(false);
    //const [ingreItems, setIngreItems] = useState([]);



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
                                    <MenuEdit menuItem={restMenu.item} menuDescrip={restMenu.description}/>
                                    <Button variant="link" onClick={() => deleteMenuItem(menuItems.idx)}>❌</Button>
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
