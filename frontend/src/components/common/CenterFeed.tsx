import React from 'react';
import { Card } from 'react-bootstrap';

interface CenterFeedProps {
    title: string;
    text: string;
}

const CenterFeed: React.FC<CenterFeedProps> = ({ title, text }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CenterFeed;
