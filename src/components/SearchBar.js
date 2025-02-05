import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = React.memo(({ setBusinesses }) => {

    const [terms, setTerms] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match")

    const handleNameChange = (e) => {
        e.preventDefault();
        setTerms(e.target.value);
    }

    const handleLocationChange = (e) => {
        e.preventDefault();
        setLocation(e.target.value);
    }

    const handleSortChange = (e) => {
        e.preventDefault();
        setSortBy(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(`Searching Yelp with ${terms}, ${location}, ${sortBy}`);
        setBusinesses(terms, location, sortBy);
    };

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="rowContainer">
                <button className={sortBy === "best_match" ? "btn_selected" : "btn_select"} name="best_match" value="best_match" onClick={handleSortChange}>Best Match</button>
                <button className={sortBy === "rating" ? "btn_selected" : "btn_select"} name="rating" value="rating" onClick={handleSortChange}>Highest Rated</button>
                <button className={sortBy === "review_count" ? "btn_selected" : "btn_select"} name="review_count" value="review_count" onClick={handleSortChange}>Most Reviewed</button>
            </div>
            <div>
                <input type="text" autoComplete="off" name="terms" value={terms} placeholder="Search Businesses" onChange={handleNameChange} />
                <input type="text" autoComplete="off" required name="location" value={location} placeholder="Where? *" onChange={handleLocationChange} />
            </div>
            <input type="submit" value="Let's Go" />
        </form>
    )
});
