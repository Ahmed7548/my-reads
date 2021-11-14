import Select from "../form-components/Select"
import classes from "./Book.module.css"
import PropTypes from 'prop-types'

const Book = (props) => {

    const onChoseHandler = (value) => {
        console.log(value)
    }
   
    console.log(props.book)
    return (
        <div className={classes.book}>
            <div className={classes["book-cover"]} style={
                {
                    backgroundImage:`url(${props.book.imageLinks.smallThumbnail})`
                }
                
            }>
                <Select onChose={onChoseHandler} bookShelf={props.book.shelf} />
            </div>
            <div>
                <h4 className={classes["book-name"]}>book name</h4>
                <p className={classes["book-author"]}> a great Author</p>
            </div>
            
        </div>
    )
}

Book.propTypes={
    book: PropTypes.object.isRequired,
    
}


export default Book