import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import BookShelfs from "./components/book -shelf/BookShelfs";
import * as BooksAPI from "./BooksAPI";
import { Navigate, Route, Routes } from "react-router";
import FetchingError from "./components/errors/FetchingError";
import SearchPage from "./components/search/SearchPage";

const BooksApp = () => {
  const [isLoading, setIsloading] = useState(true);
  const [books, setBooks] = useState([]);
  const [isdataUpdated, setIsdataUpdated] = useState(true);
  const [error, setError] = useState(false)
  
  
// fetching data throuht the API 
//useEffect to ensure that data is refetched when there is an update
  useEffect(() => {
    if (isdataUpdated) {
      BooksAPI.getAll().then((resolve) => {
        setBooks(resolve);
        setIsloading(false);
        setIsdataUpdated(false);
      }).catch((e) => {
        console.log(e)
        setError(true)
      });
    }
  }, [isdataUpdated]);
  //update data on selecting new shelf
  const changeShelfHandle = (data) => {
    BooksAPI.update({ id: data.id }, data.newShelf).then(() => {
      setIsdataUpdated(true)
    });
  };

  const WantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");
  const currReading = books.filter((book) => book.shelf === "currentlyReading");


  if (error) {
    return (
      <Routes>
        <Route path="*" element={<Fragment>
          <Header/>
          <FetchingError title="failed to fetch"> check your internet connection</FetchingError>
          </Fragment>} />
        </Routes>
    )
  }

  return (
    <Fragment>
      {!isLoading && (
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="/curr-reading"/>} />
            <Route
              path="/want-to-read"
              element={
                <BookShelfs
                  books={WantToRead}
                  onChangeShelf={changeShelfHandle}
                />
              }
            />
            <Route
              path="/curr-reading"
              element={
                <BookShelfs
                  books={currReading}
                  onChangeShelf={changeShelfHandle}
                />
              }
            />
            <Route
              path="/read"
              element={
                <BookShelfs books={read} onChangeShelf={changeShelfHandle} />
              }
            />
            <Route path="/search" element={<SearchPage myBooks={books} onChangeShelf={changeShelfHandle} />}/>
          </Routes>
        </Fragment>
      )}
    </Fragment>
  );
};

export default BooksApp;
