import React from 'react';
import { Card } from 'react-bootstrap';

interface CenterFeedProps {
    image: string;
    title: string;
    subtitle: string;
    text: string;
}

const CenterFeed: React.FC<CenterFeedProps> = ({ image, title, subtitle, text }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={image} />
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CenterFeed;
