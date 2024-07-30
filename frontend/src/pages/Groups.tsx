import React from 'react';
import CardLayout from '../components/common/CardLayout';

const Groups: React.FC = () => {
    const leftCard = { title: "Groups", subtitle: "Discover what's new!", item1: "My Groups", item2: "Group Feed", item3: "Find Groups", };
    const centerCard = { image: "https://via.placeholder.com/150", title: "Group Feed", subtitle: "Recent updates from your groups.", text: "Stay updated with the latest posts and discussions." };
    const rightCard = { title: "Find Groups", subtitle: "Search and join new groups.", item1: "Group 1", item2: "Group 2", item3: "Group 3" };

    return (
        <div>
            <CardLayout leftCard={leftCard} centerCard={centerCard} rightCard={rightCard} />
        </div>
    );
};

export default Groups;
