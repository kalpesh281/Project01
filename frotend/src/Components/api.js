import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001//v1/auth',
})

export default googleAuth= (code) =>api.get(`/google?code=${code}`)