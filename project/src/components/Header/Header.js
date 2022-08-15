import "./Header.css"

import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="App-header">
            <div className="Header-container">
                <ul>
                    <li><Link to="/">All Books</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/mybooks">My Books</Link></li>
                </ul>
            </div>
        </header>
    )
}