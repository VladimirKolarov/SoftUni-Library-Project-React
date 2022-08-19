import * as request from "./requester.js";

const baseUrl = "http://localhost:3030/users";

export const  loginUser = async (email, password) =>
    await request.post(`${baseUrl}/login`, { email, password });

export const registerUser = async (username, email, password ) =>
    await request.post(`${baseUrl}/register`, { email, password, username });

export const logoutUser = async (token) => {
    await request.get(`${baseUrl}/logout`, {},  token );
}
