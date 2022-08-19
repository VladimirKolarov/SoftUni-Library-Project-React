const emailRegEx = /[a-zA-Z0-9.\-_]+@[a-zA-Z0-9\-_]+.\w+/


const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/


export const isValidRegister = {

    Name: (name) => name.length >= 3,

    Email: (email) => emailRegEx.test(email),

    Password: (password) => passwordRegEx.test(password) && password.length >= 8,

    ConfirmPassword: (password, confirmPassword) => password === confirmPassword,

}
