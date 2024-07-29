import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface CardContent {
    title: string;
    text: string;
}

interface CardLayoutProps {
    leftCard: CardContent;
    centerCard: CardContent;
    rightCard: CardContent;
}

const CardLayout: React.FC<CardLayoutProps> = ({ leftCard, centerCard, rightCard }) => {
    return (
        <Container fluid>
            <Row>
                <Col md={3} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>{leftCard.title}</Card.Title>
                            <Card.Text>{leftCard.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>{centerCard.title}</Card.Title>
                            <Card.Text>{centerCard.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>{rightCard.title}</Card.Title>
                            <Card.Text>{rightCard.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CardLayout;
