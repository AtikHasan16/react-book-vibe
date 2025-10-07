import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataFromLocal, setUpdateToLocal } from "../Utility/AddToLocal";
import ListCard from "../Components/ListCard";
import WishList from "./WishList";

const ListedBooks = () => {
  const [listBook, setListBook] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

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
  // console.log(wishList);
  const handleSort = (type) => {
    setSort(type);
  };
  // console.log();

  const removeFromReadList = (bookId) => {
    const removeReadCard = listBook.filter((book) => book.bookId !== bookId);
    // console.log(getReadData);
    setUpdateToLocal("readBook", bookId);
    setListBook(removeReadCard);
  };
  const removeFromWishList = (bookId) => {
    const removeWishCard = wishList.filter((book) => book.bookId !== bookId);
    setUpdateToLocal("wishList", bookId);
    setWishList(removeWishCard);
  };
  return (
    <>
      <div className="text-xl font-semibold text-gray-500 ">
        <div className="flex justify-center items-center mb-5">
          <div className="dropdown dropdown-center ">
            <div tabIndex={0} role="button" className="btn m-1 ">
              Sort By {sort ? `: ${sort}` : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => handleSort("Pages")}>Pages</button>
              </li>
              <li>
                <button onClick={() => handleSort("Rating")}>Rating</button>
              </li>
            </ul>
          </div>
        </div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className=" space-y-10  my-10">
              {listBook.map((listBook) => (
                <ListCard
                  listBook={listBook}
                  removeFromReadList={removeFromReadList}
                  key={listBook.bookId}
                ></ListCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" space-y-10  my-10">
              {wishList.map((wBook) => (
                <WishList
                  removeFromWishList={removeFromWishList}
                  wBook={wBook}
                  key={wBook.bookId}
                ></WishList>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ListedBooks;
