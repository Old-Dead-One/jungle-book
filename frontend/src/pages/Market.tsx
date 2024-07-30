import React from 'react';
import CardLayout from '../components/common/CardLayout';

const Market: React.FC = () => {
    const leftCard = { title: "Groups", subtitle: "Discover what's new!", item1: "My Groups", item2: "Group Feed", item3: "Find Groups" };
    const centerCard = { image: "https://via.placeholder.com/150", title: "Featured Products", subtitle: "Highlight of top-selling items.", text: "Discover the top-selling products in the market." };
    const rightCard = { title: "Deals & Offers", subtitle: "Special offers and discounts.", item1: "Deal 1", item2: "Deal 2", item3: "Deal 3" };

    return (
        <div>
            <CardLayout leftCard={leftCard} centerCard={centerCard} rightCard={rightCard} />
        </div>
    );
};

export default Market;
