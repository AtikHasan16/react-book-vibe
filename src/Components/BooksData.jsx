// import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BooksData = ({ data }) => {
  //   const [books, setBooks] = useState();

  //   useEffect(() => {
  //     const bookData = async () => {
  //       const response = await fetch("/booksData.json");
  //       const data = await response.json();
  //       setBooks(data);
  //     };
  //     bookData();
  //   }, []);
  //   console.log(books);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {data.map((data) => (
          <BookCard key={data.bookId} data={data}></BookCard>
        ))}
      </div>
    </>
  );
};

export default BooksData;
