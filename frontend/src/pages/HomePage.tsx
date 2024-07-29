import React from 'react';
import CardLayout from '../components/common/CardLayout';

const HomePage: React.FC = () => {
    const leftCard = { title: "Welcome", text: "Discover what's new in Junglebook!" };
    const centerCard = { title: "Main Feed", text: "Here's what's happening in your network." };
    const rightCard = { title: "Quick Links", text: "Access your favorite features quickly." };

    return (
        <div>

            <CardLayout leftCard={leftCard} centerCard={centerCard} rightCard={rightCard} />
        </div>
    );
};

export default HomePage;
