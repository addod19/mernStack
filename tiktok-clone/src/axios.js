import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://localhost:8082" //development
    baseURL: "https://tinder-backasd.herokuapp.com" // production
});

export default instance;