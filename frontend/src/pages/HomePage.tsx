import React from 'react';
import CardLayout from '../components/common/CardLayout';

const HomePage: React.FC = () => {
    const leftCard = { title: "Groups", subtitle: "Discover what's new!", item1: "My Groups", item2: "Group Feed", item3: "Find Groups" };
    const centerCard = { image: "https://via.placeholder.com/150", title: "News Feed", subtitle: "See what's happening.", text: "Check out the latest posts from your connections." };
    const rightCard = { title: "Quick Links", subtitle: "Access your favorites.", item1: "Market", item2: "Jobs", item3: "Events", image: "", text: "" };

    return (
        <div>
            <CardLayout leftCard={leftCard} centerCard={centerCard} rightCard={rightCard} />
        </div>
    );
};

export default HomePage;
