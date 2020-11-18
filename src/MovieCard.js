import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({ el }) => {
    return (
        <div className="wrapper" >
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" className="container-img" src={el.img} width="100" height="400" />
                <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                        {el.description}
                    </Card.Text>
                    <div><StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={el.rating}
                    />
                    </div>
                    <Button variant="primary">Watch Movie</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
