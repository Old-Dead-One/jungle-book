import React from 'react';
import { Card } from 'react-bootstrap';

interface LeftFeedProps {
    title: string;
    text: string;
}

const LeftFeed: React.FC<LeftFeedProps> = ({ title, text }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default LeftFeed;
