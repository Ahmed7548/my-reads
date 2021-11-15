import Select from "../form-components/Select";
import classes from "./Book.module.css";
import PropTypes from "prop-types";

const Book = (props) => {
  const onChoseHandler = (value) => {
    const data = {
      id: props.book.id,
      newShelf: value,
    };
    //chaining required data to update shelf up
    props.onChangeShelf(data);
  };

  return (
    <div className={classes.book}>
      <div
        className={classes["book-cover"]}
        style={
          props.book.imageLinks && {
            backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`,
          }
        }
      >
        <Select onChose={onChoseHandler} bookShelf={props.book.shelf} />
      </div>
      <div>
        <h4 className={classes["book-name"]}>
          {props.book.title && props.book.title}
        </h4>
        <p className={classes["book-author"]}>
          {" "}
          {props.book.authors && props.book.authors.join(", ")}
        </p>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Book;
