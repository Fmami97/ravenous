import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { BusinessList, defaultBusinesses } from "./components/BusinessList";
import { HeaderComponent } from "./components/HeaderComponent";
import { getBusinessListings } from "./utils/yelpAPI"
export const App = () => {
    const [businesses, setBusinesses] = useState(defaultBusinesses);

    const searchBusinesses = async (search_terms, location, sort_by) => {
        const businesses = await getBusinessListings(search_terms, location, sort_by)
        console.log(businesses);
        setBusinesses(businesses);
    }

    // <SearchBar {...{ name, handleNameChange, location, handleLocationChange, sortType, handleSortChange, handleSubmit }} />
    return (
        <>
            <HeaderComponent />
            <SearchBar setBusinesses={searchBusinesses} />
            <BusinessList businesses={businesses} />
        </>
    )
};