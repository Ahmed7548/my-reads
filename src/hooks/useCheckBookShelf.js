import { useState } from "react"

const useCheckBookShelf = (books) => {
    
    const [searchDone, setSearchDone] = useState(false)
    const [checkedBooks, setCheckedBooks] = useState([])
    
    const checkSearch = (searchBooks) => {
        const outedBooks = searchBooks.map(book => {
            let outedBook=book
            books.forEach(existingBook => {
                if (book.id === existingBook.id) {
                    outedBook = {
                        ...book,
                        shelf: existingBook.shelf
                    }
                }
            });

            setSearchDone(true)

            return outedBook
        })
        setCheckedBooks(outedBooks)
    }

    return [searchDone,checkSearch,checkedBooks]
}


export default useCheckBookShelf