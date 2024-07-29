import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftFeed from '../pages/LeftFeed';
import CenterFeed from '../pages/CenterFeed';
import RightFeed from '../pages/RightFeed';

const HomePage: React.FC = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
                {/* Left Card */}
                <Col md={3}>
                    <LeftFeed
                        title="Left Card"
                        text="This is the left card which is 25% of the width."
                    />
                </Col>

                {/* Center Card */}
                <Col md={6}>
                    <CenterFeed
                        title="Center Card"
                        text="This is the center card which is 50% of the width."
                    />
                </Col>

                {/* Right Card */}
                <Col md={3}>
                    <RightFeed
                        title="Right Card"
                        text="This is the right card which is 25% of the width."
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
