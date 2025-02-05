export async function getBusinessListings(search_terms, location, sort_by) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
    };
    const url = "https://api.yelp.com/v3/businesses/search";
    const businessListingsRequest = url + `?location=${location}&sort_by=${sort_by}&term=${search_terms}&limit=50`;
    try {
        const response = await fetch(businessListingsRequest, options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse.businesses;
        }
        throw new Error("Unexpected error: try again with other parameters")
    } catch (error) {
        console.error(error.message);
    }
}