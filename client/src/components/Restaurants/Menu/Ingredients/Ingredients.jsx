import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.css';

const Ingredients = ({ ingres }) => {
    console.log(ingres)
    return (

        <div className="ingre">
            <Card className="ingreCard">
                <Card.Title className="ingreTitle">
                    Ingredients
                </Card.Title>
                <Card.Body>
                    <ul>
                        {ingres.map((ingres, index) => {
                            return (
                                <li key={index}>
                                    <h6 className='item'>
                                        {`${ingres}`}
                                        <Button variant="link">✎</Button>
                                    </h6>
                                </li>
                            )
                        })}
                    </ul>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Ingredients
