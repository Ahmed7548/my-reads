import Book from "../book/Book";
import PropTypes from "prop-types";
import classes from "./shelf.module.css";
const Shelf = (props) => {

  if (props.books.length===0) {
    return (
      <section className={classes.shelf}>
        <p className={classes.feedback}>there is no books added here</p>
      </section>
    );
  }

  return (
    <section className={classes.shelf}>
      {props.books.map((book) => (
        <Book key={book.id} book={book} onChangeShelf={props.onChangeShelf} />
      ))}
    </section>
  );
};
Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};
export default Shelf;
