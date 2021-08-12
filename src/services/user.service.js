import axios from "axios";

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}
const instance = axios.create(config);

const getUsers = () =>{
    return instance.get('users');
}
const getUser = (id) =>{
    return instance.get('users/'+id);
}
const getPosts = (id) =>{
    return instance.get('users/'+id+'/posts');
}
const getComments = (id) =>{
    return instance.get('posts/'+id+'/comments');
}

export {getUsers, getUser, getPosts, getComments}

