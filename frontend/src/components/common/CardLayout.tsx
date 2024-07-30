import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

interface CardContent {
    image?: string;
    title?: string;
    subtitle?: string;
    text?: string;
    item1?: string;
    item2?: string;
    item3?: string;
}

interface CardLayoutProps {
    leftCard: CardContent;
    centerCard: CardContent;
    rightCard: CardContent;
}

const CardLayout: React.FC<CardLayoutProps> = ({ leftCard, centerCard, rightCard }) => {
    return (
        <Container fluid className="card-layout-container">
            <Row>
                <Col md={3} className="d-flex justify-content-center mb-4">
                    <Card className="fixed-width-card">
                        <Card.Body>
                            <Card.Title>{leftCard.title}</Card.Title>
                            <Card.Subtitle>{leftCard.subtitle}</Card.Subtitle>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{leftCard.item1}</ListGroup.Item>
                                <ListGroup.Item>{leftCard.item2}</ListGroup.Item>
                                <ListGroup.Item>{leftCard.item3}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="d-flex justify-content-center mb-4">
                    <Card className="fixed-width-card">
                        <Card.Body>
                            <Card.Img variant="top" src={centerCard.image} />
                            <Card.Title>{centerCard.title}</Card.Title>
                            <Card.Text>{centerCard.subtitle}</Card.Text>
                            <Card.Text>{centerCard.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="d-flex justify-content-center mb-4">
                    <Card className="fixed-width-card">
                        <Card.Body>
                            <Card.Title>{rightCard.title}</Card.Title>
                            <Card.Subtitle>{rightCard.subtitle}</Card.Subtitle>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{rightCard.item1}</ListGroup.Item>
                                <ListGroup.Item>{rightCard.item2}</ListGroup.Item>
                                <ListGroup.Item>{rightCard.item3}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CardLayout;
