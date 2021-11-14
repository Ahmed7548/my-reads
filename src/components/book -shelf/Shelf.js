import Book from "../book/Book"
import PropTypes from "prop-types"
import classes from "./shelf.module.css"
const Shelf = (props) => {
    
    return (
        <section className={classes.shelf}>
            {props.books.map(book => 
                (<Book key={book.id} book={book}/>)
            )}
        </section>
    )
}
Shelf.propTypes = {
    books: PropTypes.array.isRequired,
}
export default Shelf