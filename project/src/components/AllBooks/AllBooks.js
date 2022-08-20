import "./AllBooks.css"

import { Book } from "../Book/Book"
import { useState, useContext } from "react"

import { BookContext } from "../../contexts/BookContext"

export const AllBooks = () => {

    const { bookData } = useContext(BookContext);

    const [searchText, setSearchText] = useState("");

    const [isSearching, setIsSearching] = useState(false);

    const [searchResult, setSearchResult] = useState([]);


    const changeHandler = (e) => {
        setSearchText(e.target.value);
    };

    const searchBooks = (input) => {
        if (!input) {
            setIsSearching(false)
            // console.log("no input");
            return bookData;
        }

        if (!hasData(bookData)) {
            setIsSearching(false);
            // console.log("no data");
            setSearchText("");
            return
        }

        const filteredData = bookData
            .filter(book =>
            (book.title.toLowerCase().includes(input.toLowerCase())
                || (book.authors
                    .some(author => author.toLowerCase().includes(input.toLowerCase()))
                )
            ));

        setIsSearching(true);
        setSearchResult(filteredData);
        // console.log("Filtered data: ", filteredData);
        setSearchText("");
        return filteredData;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        searchBooks(searchText);
    }

    const hasData = (obj) => Object.keys(obj).length != 0;

    const bookList = (data) => {
        return (
            <ul className="Books-list">{data.map(book =>
                <li key={book._id}>
                    <Book book={book} />
                </li>
            )}
            </ul>
        )
    }

    return (
        <div className="AllBooks">
            {/* <button onClick={getBooksHandler}>Get books</button> */}

            <form className="Search-bar" onSubmit={formSubmitHandler}>
                <input
                    id="searchbox"
                    type="text"
                    name="searchbox"
                    placeholder="Search by title or author"
                    onChange={changeHandler}
                    value={searchText || ""}
                />
                <button>Search</button>
            </form>

            <h2>Search results: </h2>

            {!hasData(bookData)
                ? <h3>Loading...</h3>
                : (!isSearching)
                    ? bookList(bookData.sort((a, b) => a.title.localeCompare(b.title)))
                    : (searchResult.length == 0)
                        ? <h3>No results found</h3>
                        : bookList(searchResult.sort((a, b) => a.title.localeCompare(b.title)))
            }

        </div>
    )
}