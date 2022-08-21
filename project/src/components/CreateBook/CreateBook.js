import "./CreateBook.css"

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { createNew } from "../../services/bookServices";
import { AuthContext } from "../../contexts/AuthContext";
import { BookContext } from "../../contexts/BookContext";

export const CreateBook = () => {

    const [newBook, setNewBook] = useState({ authors: [], categories: [] });
    const { userData } = useContext(AuthContext);
    const { bookData, bookDataHandler } = useContext(BookContext);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setNewBook(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }));
    }

    const arrayChangeHandler = (e) => {
        setNewBook(oldState => ({
            ...oldState,
            [e.target.name]: (e.target.value).split(",")
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(newBook);
        console.log(userData);


        if (!userData.accessToken) {
            console.log("Error! User not permited!");
            navigate("/", { replace: true });
            return;
        }

        createNew(userData.accessToken, newBook)
            .then(data => {
                console.log(data);
                bookHandler(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const bookHandler = (data) => {
        if (data.code) {
            console.log(data.message);
        } else {
            console.log(bookData);
            bookDataHandler(oldState => [...oldState, data]);
            navigate("/", { replace: true });
        }
    }
    console.log(bookData);



    return (
        <div className="Create-book-container">

            <form onSubmit={submitHandler} className="Create-book">

                <h2>Create new book</h2>
                <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={changeHandler}
                    value={newBook.title || ""}
                />

                <input
                    id="authors"
                    type="text"
                    name="authors"
                    placeholder="Author"
                    onChange={arrayChangeHandler}
                    value={newBook.authors || ""}
                />

                <input
                    id="thumbnailUrl"
                    type="text"
                    name="thumbnailUrl"
                    placeholder="Image URL"
                    onChange={changeHandler}
                    value={newBook.thumbnailUrl || ""}
                />

                <input
                    id="categories"
                    type="text"
                    name="categories"
                    placeholder="Category"
                    onChange={arrayChangeHandler}
                    value={newBook.categories || ""}
                />

                <textarea
                    id="shortDescription"
                    name="shortDescription"
                    rows="4"
                    cols="60"
                    maxLength="250"
                    placeholder="Enter a short description"
                    onChange={changeHandler}
                    value={newBook.shortDescription || ""}
                />

                <textarea
                    id="longDescription"
                    name="longDescription"
                    rows="7"
                    cols="60"
                    maxLength="450"
                    placeholder="Enter a longer description"
                    onChange={changeHandler}
                    value={newBook.longDescription || ""}
                />

                <button>Create Book</button>

            </form>

        </div>
    )
}