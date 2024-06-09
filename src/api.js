import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID 7Pe4Z9ofytCbfeOSltvV8PUxp86J57OaKOzMNWe_I9U'
        },
        params:{
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;