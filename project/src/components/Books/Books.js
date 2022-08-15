import { useEffect, useState } from "react";



export const Books = () => {

    const GetBooks = () => {
        fetch('http://localhost:3030/data/books')
            .then((response) => response.json())
            .then((data) => setBooks(data));
    }

    const onClickHandler = () => {GetBooks()}

    const [bks, setBooks] = useState([]);

    console.log(bks)

    return (
        <section className="Books-catalog-section">
            <button onClick={onClickHandler}>get books</button>
            <ul>
                {bks.map(bok=>
                    <li key = {bok._id}>
                        <p>ID: {bok._id}</p>
                        <p>title {bok.title}</p>
                    </li>
                    )}
            </ul>
        </section>
    )
}