import "./Header.css"

import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { logoutUser } from "../../services/userServices";



export const Header = () => {

    const { userData, userLoginHandler } = useContext(AuthContext);

    useEffect(() => {
        greetingUser()
    })

    const logoutClickHandler = () => {
        logoutUser(userData.accessToken)
        userLoginHandler({});
    }

    const getNameFromEmail = (email) => email.split("@")[0];

    const greetingUser = () => {
        let result = "Friend";

        if (userData.accessToken) {
            if (userData.username) {
                result = userData.username;
            }
            else {
                getNameFromEmail(userData.email);
            }
        }

        return (<div>Hello {result}</div>);
    }

    const guestLinks = () => {
        return (
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </>
        );
    }

    const loggedinLinks = () => {
        return (
            <>
                <li><Link to="/createbook">Create Book</Link></li>
                <li><Link to="/" onClick={logoutClickHandler}>Logout</Link></li>
            </>
        );
    }

    return (
        <header className="App-header">
            <div className="Header-container">

                {greetingUser()}

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allbooks">All Books</Link></li>
                    {!userData.accessToken ? guestLinks() : loggedinLinks()}
                </ul>
            </div>
        </header>
    )
}