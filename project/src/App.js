import './reset.css';
import './App.css';

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { BookContext } from './contexts/BookContext';

import { getAll } from './services/bookServices';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login.js'
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import { AllBooks } from './components/AllBooks/AllBooks';




function App() {


    const [userData, setUserData] = useState({});

    const [bookData, setBookData] = useState({});

    const bookDataHandler = (books) => {
        setBookData(books);
    }

    const userLoginHandler = (user) => {
        setUserData(user);
    }


    const getBooksHandler = async () => {
        const allBooks = await getAll();

        bookDataHandler(allBooks);
    }

    useEffect(() => { getBooksHandler() }, []);

    return (

        <AuthContext.Provider value={{ userData, userLoginHandler }}>
            <BookContext.Provider value={{ bookData, bookDataHandler }}>
                <div className="App">

                    <Header />

                    <section className='Main'>

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/allbooks" element={<AllBooks />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/Logout" element={<h2> Logout</h2>} />
                            <Route path="/register" element={<Register />} />
                            {/* <Route path="/mybooks" element={<h2> My Books</h2>} /> */}
                            <Route path="*" element={<h2> 404 Page Not Found</h2>} />

                        </Routes>

                    </section>

                </div>
            </BookContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
