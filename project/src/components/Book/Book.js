import "./Book.css"
import "./BookDetails/BookDetails"

import { useState } from "react"
import { BookDetails } from "./BookDetails/BookDetails";

export const Book = ({ book }) => {

    const [activeBook, setActiveBook] = useState(false);

    const toggleDetailsHandler = () => {
        // console.log(book);
        setActiveBook((oldstate) => !oldstate);
    }

    return (
        <div>
            {activeBook ? <BookDetails book = {book} toggle = {toggleDetailsHandler} /> : undefined}

            <div className="Book-container" onClick={toggleDetailsHandler}>

                <img src={book.thumbnailUrl} />
                <article>
                    <h3 className="Book-title">{book.title}</h3>
                    <h5 className="Authors">{book.authors? book.authors.join(", ") : undefined}</h5>
                    <p className="Description">{book.shortDescription}</p>
                </article>
            </div>
        </div>
    )
}