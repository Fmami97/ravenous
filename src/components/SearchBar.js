import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = React.memo(({ setBusinesses }) => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [sortType, setSortType] = useState("best_match")

    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleLocationChange = (e) => {
        e.preventDefault();
        setLocation(e.target.value);
    }

    const handleSortChange = (e) => {
        e.preventDefault();
        setSortType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Searching Yelp with ${name}, ${location}, ${sortType}`);
        console.log(`Searching Yelp with ${name}, ${location}, ${sortType}`);
        setBusinesses([]);
    };

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="rowContainer">
                <button className={sortType === "best_match" ? "btn_selected" : "btn_select"} name="best_match" value="best_match" onClick={handleSortChange}>Best Match</button>
                <button className={sortType === "rating" ? "btn_selected" : "btn_select"} name="rating" value="rating" onClick={handleSortChange}>Highest Rated</button>
                <button className={sortType === "review_count" ? "btn_selected" : "btn_select"} name="review_count" value="review_count" onClick={handleSortChange}>Most Reviewed</button>
            </div>
            <div>
                <input type="text" autoComplete="off" name="name" value={name} placeholder="Search Businesses" onChange={handleNameChange} />
                <input type="text" autoComplete="off" name="location" value={location} placeholder="Where?" onChange={handleLocationChange} />
            </div>
            <input type="submit" value="Let's Go" />
        </form>
    )
});
