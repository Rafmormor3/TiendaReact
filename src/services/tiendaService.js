import axios from 'axios';

const baseURL = 'https://my-first-app-blond-psi.vercel.app/tiendas';

const apiService = axios.create({
baseURL,
});

export const getTiendas = ()=> apiService.get('')

export const getTienda = (tiendaId) => {
return apiService.get(`/${tiendaId}`);
};

export const createTienda = (tiendaData) => {
return apiService.post('/', tiendaData);
};

export const updateTienda = (tiendaId, updatedData) => {
return apiService.put(`/${tiendaId}`, updatedData);
};

export const deleteTienda = (tiendaId) => {
return apiService.delete(`/${tiendaId}`);
};