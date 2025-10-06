import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

import ListedBooks from "../Pages/Listedbooks";
import PagesToRead from "../Pages/Pagestoread";
import BooksData from "../Components/BooksData";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import BookDetails from "../Components/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        loader: () => axios("/booksData.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      { path: "bookDetails/:bookId", element: <BookDetails></BookDetails> },
      { path: "listedBook", element: <ListedBooks></ListedBooks> },
      { path: "pagesToRead", element: <PagesToRead></PagesToRead> },
    ],
  },
]);
