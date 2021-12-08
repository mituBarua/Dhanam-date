import React from 'react';
import { Card } from 'react-bootstrap';

const Holiday = ({ item }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Notes</Card.Subtitle>
                    <Card.Text>
                        {item.notes}
                    </Card.Text>
                    <Card.Text>
                        {item.date}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Holiday;