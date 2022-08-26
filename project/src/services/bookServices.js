import * as request from "./requester.js";

const baseUrl = "http://localhost:3030/data/books";

export const getAllBooks = async () =>
    await request.get(baseUrl);

export const getOneBookById = async (id) =>
    await request.get(`${baseUrl}/${id}`);

export const createNewBook = async (token, bookData) =>
    await request.post(baseUrl, bookData, token);

export const updateBook = async (token, bookData) =>
    await request.put(`${baseUrl}/${bookData._id}`, bookData, token);

export const deleteBook = async (token, bookId) =>
    await request.del(`${baseUrl}/${bookId}`, {}, token);

