import axios from 'axios';

const baseURL = 'https://my-first-app-blond-psi.vercel.app/users';

const apiService = axios.create({
baseURL,
});

export const getUsers = ()=> apiService.get('')

export const getUser = (userId) => {
return apiService.get(`/${userId}`);
};

export const createUser = (user) => {
return apiService.post('/', user);
};

export const updateUser = (userId, user) => {
return apiService.put(`/${userId}`, user);
};