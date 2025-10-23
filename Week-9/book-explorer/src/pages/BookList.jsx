import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import booksData from "../data/booksData";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => setBooks(booksData), 500);
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
      {books.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
