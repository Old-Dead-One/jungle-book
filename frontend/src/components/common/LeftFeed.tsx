import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

interface LeftFeedProps {
    title: string;
    subtitle: string;
    item1: string;
    item2: string;
    item3: string;
}

const LeftFeed: React.FC<LeftFeedProps> = ({ title, subtitle, item1, item2, item3 }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>{item1}</ListGroup.Item>
                    <ListGroup.Item>{item2}</ListGroup.Item>
                    <ListGroup.Item>{item3}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card >
    );
};

export default LeftFeed;
