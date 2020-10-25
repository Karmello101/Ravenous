const { default: SearchBar } = require("../components/SearchBar/SearchBar");

const apiKey = '7o7qFrgPb03gZPjWByd2drXXJkNUEZoTPdxt_KZ-PPPEhx8OKX4QHulb_SFSCf0im_kt_GNEcBN_4ZrV_l-Khe8vM_TxR8IvRz6Mt4OQPGPZweWGPpUXqfwF3uyVX3Yx';

const Yelp = {
  search(term,location,sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
    }).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
       if(jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
            id: business.id,
            imageSrc: business.imageSrc,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipCode,
            category: business.category[0].title,
            rating: business.rating,
            reviewCount: business.reviewCount
            }
          });
       }
    })
  }
};

export default Yelp;
