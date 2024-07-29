import React from 'react';
import { Card } from 'react-bootstrap';

interface RightFeedProps {
    title: string;
    text: string;
}

const RightFeed: React.FC<RightFeedProps> = ({ title, text }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default RightFeed;
