import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./SearchPage.module.css";
import * as BooksAPI from "../../BooksAPI";
import useCheckBookShelf from "../../hooks/useCheckBookShelf";
import BookShelfs from "../book -shelf/BookShelfs";
import FetchingError from "../errors/FetchingError";
const SearchPage = (props) => {
  //custome hook to check if searched books already on a shelf
  const [searchDone, checkSearch, checkedBooks] = useCheckBookShelf(
    props.myBooks
  );
  //state to handle error
  const [searchError, setError] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  // state to remove search result when it is true
  const [isSearchInputEmpty, setIsSearchInputEmpty] = useState(true);

  //fetching search data on pressing enter (onSearch)
  const searchHandle = (e) => {
    if (e.code === "Enter") {
      BooksAPI.search(searchValue.trim()).then((resolve) => {
        setError(null);
        if (resolve.error) {
          setError(true);
        } else {
          checkSearch(resolve);
          setError(false);
          setIsSearchInputEmpty(false);
        }
      });
    }
  };
  //controlling component value and search result
  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setIsSearchInputEmpty(true);
    }
  };

  return (
    <Fragment>
      <div className={classes.headerCover}>
        <div className={classes.search}>
          <Link to="/curr-reading"></Link>
          <input
            type="search"
            value={searchValue}
            placeholder="search for books"
            onKeyUp={searchHandle}
            onChange={changeHandler}
          />
        </div>
      </div>
      {searchError && (
        <FetchingError title="invalid search value">
          please enter a valid search value
        </FetchingError>
      )}
      {searchDone && !searchError && !isSearchInputEmpty && (
        <BookShelfs books={checkedBooks} onChangeShelf={props.onChangeShelf} />
      )}
    </Fragment>
  );
};

BookShelfs.propTypes = {
  myBooks: PropTypes.array,
  onChangeShelf: PropTypes.func.isRequired,
};

export default SearchPage;
