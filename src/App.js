import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { BusinessList, defaultBusinesses } from "./components/BusinessList";
import { HeaderComponent } from "./components/HeaderComponent";

export function App() {
    const businesses = defaultBusinesses;
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [sortType, setSortType] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }
    const handleSortChange = (e) => {
        setSortType(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <HeaderComponent />
            <SearchBar props={{ name, handleNameChange, location, handleLocationChange, sortType, handleSortChange, handleSubmit }} />
            <BusinessList businesses={businesses} />
        </>
    )
}