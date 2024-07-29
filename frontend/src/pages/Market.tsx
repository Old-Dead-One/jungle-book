import React from 'react';
import CardLayout from '../components/common/CardLayout';

const Market: React.FC = () => {
    const leftCard = { title: "Market Trends", text: "Latest trends and insights." };
    const centerCard = { title: "Featured Products", text: "Highlight of top-selling items." };
    const rightCard = { title: "Deals & Offers", text: "Special offers and discounts." };

    return (
        <div>
            <CardLayout leftCard={leftCard} centerCard={centerCard} rightCard={rightCard} />
        </div>
    );
};

export default Market;
