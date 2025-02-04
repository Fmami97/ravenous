import React from "react";
import "./Business.css";
import defaultImage from "../resources/pizza_default.png"
export function Business({ image, name, address, city, state, zipcode, category, rating, review_count }) {

    return (
        <div className="business">
            <img src={defaultImage} alt="not found" />
            <h3>{name}</h3>
            <div className="rowContainer">
                <div>
                    <p>{address}</p>
                    <p>{city}</p>
                    <p>{state} {zipcode}</p>
                </div>
                <div>
                    <p className="highlighted">{category}<br />{rating} stars</p>
                    <p>{review_count} reviews</p>
                </div>
            </div>
        </div>
    )
}