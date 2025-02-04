import React from "react";
import "./SearchBar.css";

export function SearchBar({ name, handleNameChange, location, handleLocationChange, sortType, handleSortChange, handleSubmit }) {

    return (
        <form action="" method="POST" onSubmit={handleSubmit}>
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
}