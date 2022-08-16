import { useState } from "react";
import "./Login.css"

export const Login = () => {

    const [user, setUser] = useState({ username: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        
        console.log(`Username: ${user.username} ; Password: ${user.password}`);
    }

    return (
        <form onSubmit={submitHandler} className="Login">

            <label htmlFor="username"> Username</label>
            <input
                id="username"
                type="text"
                name="username"
                placeholder="Type here"
                value={user.username}
                onChange={(e) => {
                    setUser({ ...user, username: e.target.value })
                }
                }
            />

            <label htmlFor="password"> Password</label>
            <input
                id="password"
                type="password"
                name="password"
                placeholder="Type here"
                value={user.password}
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value })
                }
                }
            />

            <button>Login</button>

        </form>
    )
}