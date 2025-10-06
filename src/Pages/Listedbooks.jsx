import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataFromLocal } from "../Utility/AddToLocal";
import BookCard from "../Components/BookCard";
import ListCard from "../Components/ListCard";
const ListedBooks = () => {
  const [listBook, setListBook] = useState([]);

  useEffect(() => {
    const readBooks = (() => {
      const storedData = getDataFromLocal();
      return storedData;
    })();
    setListBook(readBooks);
  }, []);
  // console.log(listBook);

  return (
    <>
      <div className="text-xl font-semibold text-gray-500 ">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className=" space-y-10  my-10">
              {listBook.map((listBook) => (
                <ListCard listBook={listBook} key={listBook.bookId}></ListCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Wishlist Books</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ListedBooks;
