import React from "react";
import Business from "./Business";
import "./BusinessList.css";

export const defaultBusinesses = [
    {
        id: 0,
        image_url: null,
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
        id: 1,
        image_url: null,
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
        id: 2,
        image_url: null,
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
        id: 3,
        image_url: null,
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
        id: 4,
        image_url: null,
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
                    businesses.map(business => <Business key={business.id} {...business}></Business>)

            }
        </div>
    )
});