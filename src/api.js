import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Card APIs
export const getAllCards = () => axios.get(`${BASE_URL}/cards`);
export const getCardById = (id) => axios.get(`${BASE_URL}/cards/${id}`);
export const createCard = (card) =>
    axios.post(`${BASE_URL}/cards?createdBy=admin`, card);
export const updateCard = (id, card) =>
    axios.put(`${BASE_URL}/cards/${id}?modifiedBy=admin`, card);
export const updateStock = (id, quantityChange) =>
    axios.put(
        `${BASE_URL}/cards/${id}/stock?quantityChange=${quantityChange}&modifiedBy=admin`
    );

// Reload Capital APIs
export const createReloadCapital = (data) =>
    axios.post(`${BASE_URL}/reload/create?createdBy=admin`, data);
export const updateReloadCapital = (formData) =>
    axios.post(`${BASE_URL}/reload/update`, new URLSearchParams(formData));
export const checkReloadThreshold = (provider) =>
    axios.get(`${BASE_URL}/reload/check?provider=${provider}`);
export const getReloadProviders = () =>
    axios.get(`${BASE_URL}/reload`);
