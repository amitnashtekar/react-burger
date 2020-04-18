import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-amit-burger.firebaseio.com/'
});

export default instance;