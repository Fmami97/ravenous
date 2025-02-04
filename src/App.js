import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { BusinessList, defaultBusinesses } from "./components/BusinessList";
import { HeaderComponent } from "./components/HeaderComponent";

export const App = () => {
    const [businesses, setBusinesses] = useState(defaultBusinesses);

    // <SearchBar {...{ name, handleNameChange, location, handleLocationChange, sortType, handleSortChange, handleSubmit }} />
    return (
        <>
            <HeaderComponent />
            <SearchBar setBusinesses={setBusinesses} />
            <BusinessList businesses={businesses} />
        </>
    )
};