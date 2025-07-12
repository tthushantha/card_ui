// src/api.js
import axios from "axios";

const BASE_URL = "http://192.168.1.13:8080/api/cards";

export const getAllCards = () => axios.get(BASE_URL);
export const getCardById = (id) => axios.get(`${BASE_URL}/${id}`);
export const createCard = (card) =>
    axios.post(`${BASE_URL}?createdBy=admin`, card);
export const updateCard = (id, card) =>
    axios.put(`${BASE_URL}/${id}?modifiedBy=admin`, card);
export const updateStock = (id, quantityChange) =>
    axios.put(
        `${BASE_URL}/${id}/stock?quantityChange=${quantityChange}&modifiedBy=admin`
    );
