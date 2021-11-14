import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header/Header";
// import * as BooksAPI from './BooksAPI'
// import './App.css'
import BookShelfs from "./components/book -shelf/BookShelfs";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router";

const BooksApp = () => {
  const [isLoading, setIsloading] = useState(true);
  const [books, setBooks] = useState([]);
  // const [dataUpdate, setUpdatedData] = useState([])

  useEffect(() => {
    BooksAPI.getAll().then((resolve) => {
      setBooks(resolve)
      setIsloading(false)
    });
    BooksAPI.update({id:"nggnmAEACAAJ"},"wantToRead").then(resolve=>{console.log(resolve)})
  }, []);

  const WantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");
  const currReading = books.filter((book) => book.shelf === "currentlyReading");
  
  return (
      <Fragment>
      {!isLoading &&
        <Fragment><Header />
          <Routes>
             <Route path="/" element={<p>welcome to my reads app</p>} />
            <Route
              path="/want-to-read"
              element={
                <BookShelfs
                  books={WantToRead}
                />
              }
            />
            <Route path="/curr-reading" element={<BookShelfs books={currReading} />} />
            <Route path="/read" element={<BookShelfs books={read} />} />
            {/* <Route path="/search" element={}/> */}
          </Routes></Fragment>}

    </Fragment>
  );
};

export default BooksApp;
