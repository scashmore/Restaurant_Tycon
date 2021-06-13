import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './style.css';

const Ingredients = ({ingres}) => {
    return (
        
        <div className="ingre">
            <Card className="ingreCard">
                <Card.Title className="ingreTitle">
                    Ingredients
                </Card.Title>
                <Card.Body>
                    <ul>
                        {ingres.map((ingres) => {
                            return (
                                <li key={ingres.idIngres}>
                                <h6 className='item'>
                                {ingres.item}
                                <Button variant="link">✎</Button>
                                </h6>
                            </li>
                        )})}
                    </ul>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Ingredients
