import React from 'react'
import {Card} from 'react-bootstrap';
import AddRestaurants from './AddRestaurants/AddRestaurants'
import Menu from './Menu/Menu'
import './style.css'

const Restaurants = () => {
    return (
        <div>
            <AddRestaurants />
            <div className="rest">
            <Card className="card">
                <Card.Body>
                <Card.Title>Restaurant</Card.Title>
                <Card.Text>
                    This Restaurant serves something cuisine
                </Card.Text>
                <Menu />
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Restaurants
