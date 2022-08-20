import "./Home.css"

import { Book } from "../Book/Book"
import { useContext } from "react"

import { BookContext } from "../../contexts/BookContext"

export const Home = () => {

    const { bookData } = useContext(BookContext);

    const getBooksHandler = () => {
        const shuffledBooks = bookData.sort(() => 0.5 - Math.random());
        const shortList = shuffledBooks.slice(0, 5).sort((a, b) => a.title.localeCompare(b.title));
        return shortList;
    }

    const hasData = (obj) => Object.keys(obj).length != 0;

    const bookList = () => {
        return (
            <ul className="Books-list">{
                getBooksHandler().map(book =>
                    <li key={book._id}>
                        <Book book={book} />
                    </li>
                )}
            </ul>
        )
    }

    return (
        <div className="Home">

            <h2>The books of the day are: </h2>

            {hasData(bookData) ? bookList() : <h3>Loading...</h3>}

        </div>
    )
}