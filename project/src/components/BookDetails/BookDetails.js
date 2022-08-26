import "./BookDetails.css"

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { BookContext } from "../../contexts/BookContext";
import { deleteBook, getOneBookById, updateBook } from "../../services/bookServices";


export const BookDetails = () => {
    const { userData } = useContext(AuthContext);
    const { bookDataHandler } = useContext(BookContext);

    const params = useParams();
    const navigate = useNavigate();

    const [hasData, setHasData] = useState(false);
    const [isEditing, setisEditing] = useState(false);

    const [book, setBook] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => { getBook(params.id) }, []);

    const setBookHandler = (data) => {
        if (data.code) {
            setErrors(data);
        } else {
            setBook(data)
        }

        setHasData(true);
    }

    const getBook = (id) => {
        getOneBookById(id).then((res) => setBookHandler(res));
    }


    const closeBookHandler = () => {
        navigate("/allbooks")
    }

    const confirmOwner = (userId, bookOwnerId) => {
        if (userId == null || bookOwnerId == null) {
            console.log("Error! No UserId or BookOwnerId!");
            return false;
        }

        if (userId == bookOwnerId) {
            return true;
        }

        return false;
    }

    const removeBookFromContext = (bookId) => {
        bookDataHandler((oldState) => oldState.filter(book => book._id != bookId));
    }

    const deleteClickHandler = (userData, book) => {
        if (!confirmOwner(userData._id, book._ownerId)) {
            console.log("Error! Current user is not the owner of this book and cannot delete it.");
            return;
        }

        deleteBook(userData.accessToken, book._id)
            .then((res) => !res._deletedOn ? console.log("Error: ", res.message) : removeBookFromContext(book._id))
            .then(navigate("/", { replace: true }))
            .catch((err) => console.log(err));
    }

    const editClickHandler = (userData, book) => {
        if (!confirmOwner(userData._id, book._ownerId)) {
            console.log("Error! Current user is not the owner of this book and cannot delete it.");
            return;
        }
        setisEditing((state) => !state);
    }

    const dataConvertor = (inputData) => {
        return {
            ...inputData,
            authors: inputData.authors.split(","),
            categories: inputData.categories.split(","),
        };
    }

    const updateBookContextOnEdit = (newBook) => {
        bookDataHandler(oldState => oldState.map(
            b => b._id == newBook._id ? { ...newBook } : b
        ));
    }

    const updateBookHandler = (userData, bookData) => {
        if (!confirmOwner(userData._id, bookData._ownerId)) {
            console.log("Error! Current user is not the owner of this book and cannot edit it.");
            return;
        }

        updateBook(userData.accessToken, bookData)
            .then((res) => {
                res.code
                    ? console.log("Error: ", res.code, res.message)
                    : updateBookContextOnEdit(res); setBook(res); setisEditing((state) => !state);
            })
            .catch(((err) => console.log(err)));
    }

    const submitEditHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const rawData = Object.fromEntries(formData);
        const data = dataConvertor(rawData);

        const newBookdata = { ...book, ...data };

        updateBookHandler(userData, newBookdata);
    }

    const EditForm = () => {
        return (
            <form className="Edit-book" onSubmit={submitEditHandler}>
                <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    defaultValue={book.title || ""}
                />

                <input
                    id="authors"
                    type="text"
                    name="authors"
                    placeholder="Author"
                    defaultValue={book.authors || ""}

                />

                <input
                    id="thumbnailUrl"
                    type="text"
                    name="thumbnailUrl"
                    placeholder="Image URL"
                    defaultValue={book.thumbnailUrl || ""}
                />

                <input
                    id="categories"
                    type="text"
                    name="categories"
                    placeholder="Category"
                    defaultValue={book.categories || ""}
                />

                <textarea
                    id="shortDescription"
                    name="shortDescription"
                    rows="4"
                    cols="60"
                    maxLength="250"
                    placeholder="Enter a short description"
                    defaultValue={book.shortDescription || ""}
                />

                <textarea
                    id="longDescription"
                    name="longDescription"
                    rows="7"
                    cols="60"
                    maxLength="550"
                    placeholder="Enter a longer description"
                    defaultValue={book.longDescription || ""}
                />
                <button>Submit edit data</button>
            </form>
        )
    }


    const loadingComponent = () => {
        return (
            <h2 className="Message">Loading... </h2>
        )
    }

    const errorComponent = () => {
        return (
            <h2 className="Message">We are sorry! An error has occurred. <br />Error: {errors.code} {errors.message} </h2>
        )
    }

    const bookComponent = () => {
        return (
            <article>
                <div className="Left-col">
                    <img src={book.thumbnailUrl} />
                    <h4> Written by: </h4>
                    <p>{book.authors ? book.authors.join(", ") : undefined}</p>
                    <h4> Categories: </h4>
                    <p>{book.categories ? book.categories.join(", ") : undefined}</p>
                </div>

                <div className="Right-col">
                    <h2 className="Title"> {book.title}</h2>
                    <p className="Description"> {!book.longDescription ? <>No Description available</> : book.longDescription}</p>

                    {
                        // confirmOwner(userData._id, book._ownerId) && 
                        <div className="Owner-area">
                            <button onClick={() => editClickHandler(userData, book)}> {isEditing ? "Cancel editing" : "Edit"}</button>
                            <button onClick={() => deleteClickHandler(userData, book)}>Delete</button>
                            {isEditing && EditForm()}
                        </div>}
                </div>
            </article>
        )
    }



    return (
        <div className="Book-details">
            <button onClick={closeBookHandler}>X</button>
            {!hasData ? loadingComponent()
                : errors.code ? errorComponent()
                    : bookComponent()}
        </div>
    )
}