const axios = require("axios");
const url={baseURL: 'https://jsonplaceholder.typicode.com'}
const axiosInstance = axios.create(url);

const getUsers = () => {
    return axiosInstance.get('/users');
};
const getPosts = (id) => {
    return axiosInstance.get('/users/'+id+'/posts');
};

export {getUsers, getPosts}