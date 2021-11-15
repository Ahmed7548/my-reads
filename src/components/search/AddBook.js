import classes from './AddBook.module.css'
import { Link } from 'react-router-dom'

const AddBook = () => {
    
    return (
        <div className={classes.addBook}>
              <Link to="/search"></Link>
            </div>
    )
}

export default AddBook