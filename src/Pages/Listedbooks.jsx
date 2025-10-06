import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataFromLocal } from "../Utility/AddToLocal";
import BookCard from "../Components/BookCard";
import ListCard from "../Components/ListCard";
import WishList from "./WishList";
const ListedBooks = () => {
  const [listBook, setListBook] = useState([]);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const readList = (() => {
      const getReadData = getDataFromLocal("readBook");
      return getReadData;
    })();
    setListBook(readList);

    const wishList = (() => {
      const wishListData = getDataFromLocal("wishList");
      return wishListData;
    })();
    setWishList(wishList);
  }, []);
  console.log(wishList);

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
            <div className=" space-y-10  my-10">
              {wishList.map((wBook) => (
                <WishList wBook={wBook}></WishList>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ListedBooks;
