import "./Login.css"

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { loginUser } from "../../services/userServices.js";

export const Login = () => {

    const { userData, userLoginHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [failedAuth, setfailedAuth] = useState(false);

    const loginChecker = (inputData) => {
        if (inputData.accessToken) {

            const data = {
                _id: inputData._id,
                accessToken: inputData.accessToken,
                email: inputData.email,
                username: inputData.username
            }

            userLoginHandler(data);
            navigate("/");
        }
        else {
            userLoginHandler({});
            setfailedAuth(true);
        }
    }

    const changeHandler = (e) => {
        setUser(oldState => ({ ...oldState, [e.target.name]: e.target.value }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        loginUser(user.username, user.password)
            .then(authData => {
                loginChecker(authData);
            })
            .catch((err) => {
                console.log(err);
                navigate("/404");
            })
    }

    useEffect(() => {
        if (userData.accessToken) {
            navigate("/", { replace: true });
        }
    }, [navigate, userData.accessToken]);


    return (
        <div className="Login-container" >
            <form onSubmit={submitHandler} className="Login">

                <label htmlFor="username"> Email</label>
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

                {failedAuth ? <p>Incorrect Username or Password</p> : undefined}

            </form>
        </div>
    )
}