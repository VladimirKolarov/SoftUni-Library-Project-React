import * as request from "./requester.js";

const baseUrl = "http://localhost:3030/users";

export const loginUser = (email, password) =>
    request.post(`${baseUrl}/login`, { email, password });

export const registerUser = (email, password, userName) =>
    request.post(`${baseUrl}/register`, { email, password, userName });
