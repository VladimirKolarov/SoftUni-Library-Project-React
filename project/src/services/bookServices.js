import * as request from "./requester.js";

const baseUrl = "http://localhost:3030/data/books";

export const getAll = async () =>
    await request.get(baseUrl);


export const getOne = async (id) =>
    await request.get(`${baseUrl}?where=_id %3D ${id}}`);


export const createNew = async (token, bookData) =>
    await request.post(baseUrl, bookData, token);

