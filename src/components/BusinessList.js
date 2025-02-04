import React from "react";
import Business from "./Business";
import "./BusinessList.css";

export const defaultBusinesses = [
    {
        image: "../resources/pizza_default.png",
        name: "MarginOtto Pizzeria",
        address: "1010 Paddingtton Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: 4,
        review_count: 10
    },
    {
        image: "../resources/pizza_default.png",
        name: "MarginOtto Foccaccieria",
        address: "1010 Paddingtton Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: 3,
        review_count: 20
    },
    {
        image: "../resources/pizza_default.png",
        name: "MarginOtto",
        address: "1010 Paddingtton Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: 5,
        review_count: 40
    },
    {
        image: "../src/resources/pizza_default.png",
        name: "MarginOtto Piadineria",
        address: "1010 Paddingtton Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: 2,
        review_count: 90
    },
    {
        image: "../resources/pizza_default.png",
        name: "MarginOtto Spaghetteria",
        address: "1010 Paddingtton Way",
        city: "Bordertown",
        state: "NY",
        zipcode: "10101",
        category: "Italian",
        rating: 4,
        review_count: 10
    }
]

export const BusinessList = React.memo(({ businesses }) => {
    return (
        <div className="businessList">
            {
                (businesses.length === 0) ?
                    <div className="emptyList">
                        <div>
                            <h2>Whoops !</h2>
                            <p>No matching results with provided filters</p>
                        </div>
                    </div>
                    :
                    businesses.map(business => <Business key={business.name} {...business}></Business>)

            }
        </div>
    )
});