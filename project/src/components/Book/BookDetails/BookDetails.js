import "./BookDetails.css"

export const BookDetails = (props) => {

    const closeBookHandler = () => {
        // console.log(book);
        console.log(props.book);
        props.toggle();
        // setActiveBook(false);
    }

    return (
        <div className="Book-details">
            <button onClick={closeBookHandler}>X</button>
            <article>
                <div className="Left-col">
                    <img src={props.book.thumbnailUrl} />
                    <h4> Written by: </h4>
                    <p>{props.book.authors.join(", ")}</p>
                    <h4> Categories: </h4>
                    <p>{props.book.categories.join(", ")}</p>
                </div>

                <div className="Right-col">
                    <h2 className="Title"> {props.book.title}</h2>
                    <p className="Description"> {!props.book.longDescription ? <>No Description available</> : props.book.longDescription}</p>
                </div>
            </article>

            <div className="Review-wrapper">

            </div>
        </div>
    )
}