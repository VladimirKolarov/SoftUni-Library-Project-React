import "./Login.css"

import { useState } from "react";

export const Login = () => {

    const [user, setUser] = useState({});

    const changeHandler = (e) => {
        setUser(oldState => ({ ...oldState, [e.target.name]: e.target.value }))
    };


    const submitHandler = (e) => {
        e.preventDefault();

        console.log(user)
    }

    return (
        <div className="Login-container">
            <form onSubmit={submitHandler} className="Login">

                <label htmlFor="username"> Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Type here"
                    onChange={changeHandler}
                    value={user.username || ""}
                />

                <label htmlFor="password"> Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Type here"
                    onChange={changeHandler}
                    value={user.password || ""}
                />

                <button>Login</button>

            </form>
        </div>
    )
}