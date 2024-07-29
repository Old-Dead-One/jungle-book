import React from 'react';
import CardLayout from '../components/common/CardLayout';

const Groups: React.FC = () => {
    const leftCard = { title: "My Groups", text: "Check out the groups you are part of." };
    const centerCard = { title: "Group Feed", text: "Recent updates from your groups." };
    const rightCard = { title: "Find Groups", text: "Search and join new groups." };

    return (
        <div>
            <CardLayout leftCard={leftCard} centerCard={centerCard} rightCard={rightCard} />
        </div>
    );
};

export default Groups;
