import axios from 'axios';

const axiosinstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        //...headers,
        'Authorization': 'AUTH-TOKEN', // Added just for testing
        'Content-Type': 'application/json' // Added just for testing
    }
});
// //return (
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
// axios.defaults.headers.common['Authorization'] = 'AUTH-TOKEN'; // Added just for testing
// axios.defaults.headers.post['Content-Type'] = 'application/json'; // Added just for testing
// //)

export default axiosinstance;