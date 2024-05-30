import axios from 'axios';

export default function coreApi() {

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.getItem('tokenJwt')}`,
    };

    return axios.create({
        baseURL: import.meta.env.VITE_APP_SERVER,
        headers,
    });
};
