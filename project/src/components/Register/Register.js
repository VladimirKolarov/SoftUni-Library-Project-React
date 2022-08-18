import "./Register.css";

import { useState } from "react";

import { Tac } from "./Tac/Tac";
import { isValidRegister } from "../../services/validator";

export const Register = () => {

    const [user, setUser] = useState({});
    const [showTac, setShowTac] = useState(false);

    const changeHandler = (e) => {
        setUser(oldState => ({
            ...oldState,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }));
    }

    const tacClickHandler = () => {
        setShowTac(oldState => !oldState);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(user);

        console.log("Username validator passed", isValidRegister.Username(user.username));
        console.log("Password validator passed: ", isValidRegister.Password(user.password));
        console.log("Confirm Password validator passed: ", isValidRegister.ConfirmPassword(user.password, user.confirmPassword));
    }


    return (

        <div className="Register-container">

            {showTac ? <Tac tacClickHandler={tacClickHandler} /> : undefined}

            <form onSubmit={submitHandler} className="Register">


                <h2>Create new account</h2>

                <label htmlFor="username"> Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Must be a valid email"
                    onChange={changeHandler}
                    value={user.username || ""}
                />

                <label htmlFor="password"> Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="8 characters or more"
                    onChange={changeHandler}
                    value={user.password || ""}
                />

                <label htmlFor="confirmPassword"> Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Same as Password"
                    onChange={changeHandler}
                    value={user.confirmPassword || ""}
                />

                <div className="Tac-check">
                    <input
                        id="tac"
                        type="checkbox"
                        name="tac"
                        onChange={changeHandler}
                        value={user.tac || false}
                    />
                    <div >I agree with the <span onClick={tacClickHandler}>Terms and Conditions</span></div>
                </div>

                <button disabled={!user.tac}>Register</button>

            </form>

        </div>
    )
}