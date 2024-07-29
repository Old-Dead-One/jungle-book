import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Search query:', searchQuery);
    };

    return (
        <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
        </Form>
    );
};

export default SearchBar;
