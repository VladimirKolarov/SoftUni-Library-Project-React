import "./Book.css"
import "../BookDetails/BookDetails"

import { Link } from "react-router-dom";

export const Book = ({ book }) => {

    const link = `/allbooks/${book._id}`

    return (
        <Link to={link} >
            <div className="Book-container" >

                <img src={book.thumbnailUrl} />
                <article>
                    <h3 className="Book-title">{book.title}</h3>
                    <h5 className="Authors">{book.authors ? book.authors.join(", ") : undefined}</h5>
                    <p className="Description">{book.shortDescription}</p>
                </article>
            </div>
        </Link>
    )
}