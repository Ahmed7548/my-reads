import PropTypes from "prop-types"
import classes from "./BooksShelf.module.css"
import AddBook from "../search/AddBook"
import Shelf from "./Shelf"

const BookShelfs = (props) => {
    return (
        <div className={classes.BookShelfs}>
            <Shelf books={props.books} onChangeShelf={props.onChangeShelf} />
            <AddBook/>
        </div>
    )
}

BookShelfs.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf:PropTypes.func.isRequired
}

export default BookShelfs