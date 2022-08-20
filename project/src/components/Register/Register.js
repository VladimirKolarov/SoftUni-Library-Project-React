import "./Register.css";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import { Tac } from "./Tac/Tac";
import { isValidRegister } from "../../services/validator";
import { registerUser } from "../../services/userServices";
import { AuthContext } from "../../contexts/AuthContext";


export const Register = () => {

    const [user, setUser] = useState({});
    const [showTac, setShowTac] = useState(false);
    const [errors, setErrors] = useState({});
    const [registrationServerError, setRegistrationServerError] = useState({ hasError: false, error: "" });
    const { userData, userLoginHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleError = (err, errText) => {
        setErrors(oldState => ({ ...oldState, [err]: errText }));
    }

    const changeHandler = (e) => {
        setUser(oldState => ({
            ...oldState,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }));
    }

    const tacClickHandler = () => {
        setShowTac(oldState => !oldState);
    }

    const checkInputHandler = (e, funk, errText) => {
        !funk(e.target.value, user.password) ? toggleError(e.target.name, errText) : toggleError(e.target.name, null)
    }

    const registrationHandler = (inputData) => {
        if (inputData.code) {
            setRegistrationServerError({ hasError: true, error: inputData.message });
        } else {
            setRegistrationServerError({ hasError: false, error: "" });
            loginOnRegistration(inputData);
            navigate("/", { replace: true });
        }
    }

    const loginOnRegistration = (inputData) => {
        const data = {
            _id: inputData._id,
            accessToken: inputData.accessToken,
            email: inputData.email,
            username: inputData.username
        }
        userLoginHandler(data);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const localValidator = [
            isValidRegister.Name(user.username),
            isValidRegister.Email(user.email),
            isValidRegister.Password(user.password),
            isValidRegister.ConfirmPassword(user.password, user.confirmPassword),
            isValidRegister.Tac(user.tac),
        ]

        if (localValidator.every(x => x == true)) {
            registerUser(user.username, user.email, user.password)
                .then(regData => {
                    registrationHandler(regData);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("Error in input fields! Registration failed!");
        }

    }

    useEffect(() => {
        if (userData.accessToken) {
            navigate("/", { replace: true });
        }
    }, [navigate, userData.accessToken]);


    return (

        <div className="Register-container">

            {showTac ? <Tac tacClickHandler={tacClickHandler} /> : undefined}

            <form onSubmit={submitHandler} className="Register">


                <h2>Create new account</h2>

                <label htmlFor="username" > Name</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="At least 3 characters"
                    onBlur={(e) => { checkInputHandler(e, isValidRegister.Name, "Must be at least 3 characters long") }}
                    onChange={changeHandler}
                    value={user.username || ""}
                />
                {errors.username && <p>{errors.username}</p>}

                <label htmlFor="email"> Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Must be a valid email"
                    onBlur={(e) => { checkInputHandler(e, isValidRegister.Email, "Must be a valid email") }}
                    onChange={changeHandler}
                    value={user.email || ""}
                />
                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="password"> Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="At least 8 characters"
                    onBlur={(e) => { checkInputHandler(e, isValidRegister.Password, "Must be at least 8 characters long and contain a lower case, an upper case, a number and a special character. A haiku, a gang sign and a hieroglyph are not required but are recommended.") }}
                    onChange={changeHandler}
                    value={user.password || ""}
                />
                {errors.password && <p>{errors.password}</p>}


                <label htmlFor="confirmPassword"> Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Same as Password"
                    onBlur={(e) => { checkInputHandler(e, isValidRegister.ConfirmPassword, "Must be the same as Password") }}
                    onChange={changeHandler}
                    value={user.confirmPassword || ""}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

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

                {registrationServerError.hasError && <h3>Error: {registrationServerError.error}</h3>}

                {/* <button >Register</button> */}

            </form>

        </div>
    )
}