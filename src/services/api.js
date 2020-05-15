import axios from 'axios';

const api = axios.create({ 
    baseURL: 'https://app-livros.firebaseio.com/livros'
});

export default api;