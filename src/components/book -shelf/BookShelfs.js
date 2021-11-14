
import PropTypes from "prop-types"
import classes from "./BooksShelf.module.css"

import Shelf from "./Shelf"

const BookShelfs = (props) => {
    console.log(props.books)
    return (
        <div className={classes.BookShelfs}>
            <Shelf books={props.books}/>
        </div>
    )
}

BookShelfs.propTypes = {
    books: PropTypes.array.isRequired,
}

export default BookShelfs