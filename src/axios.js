import axios from 'axios';

// we can use Axios with React to make requests to an API, 
// return data from the API, and then do things with that data in our React app

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
});

export default instance;

