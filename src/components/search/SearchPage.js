import { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import classes from "./SearchPage.module.css"
import * as BooksAPI from "../../BooksAPI"
import useCheckBookShelf from "../../hooks/useCheckBookShelf"
import BookShelfs from "../book -shelf/BookShelfs"
const SearchPage = (props) => {
    //custome hook to check if searched books already on a shelf
    const [searchDone, checkSearch, checkedBooks] = useCheckBookShelf(props.myBooks)

    //fetching search data on pressing enter (onSearch)
    const searchHandle = (e) => {
        if (e.code === "Enter") {
            BooksAPI.search(e.target.value).then(resove => {
                checkSearch(resove)
            })
        }
    }

    return (
        <Fragment>
            <div className={classes.headerCover}>
                <div className={classes.search}>
                    <Link to="/curr-reading"></Link>
                    <input type="search"  placeholder="search for books" onKeyUp={searchHandle} />
                </div>
            </div>
            {
                searchDone && <BookShelfs books={checkedBooks} onChangeShelf={props.onChangeShelf}/>
            }
        </Fragment>
    )
}

BookShelfs.propTypes = {
    myBooks: PropTypes.array,
    onChangeShelf:PropTypes.func.isRequired
}

export default SearchPage