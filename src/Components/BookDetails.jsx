import React from "react";
import { useLocation } from "react-router";
import Container from "./Container";
import { setDataToLocal } from "../Utility/AddToLocal";

const BookDetails = () => {
  const location = useLocation();
  // console.log(location.state);
  const {
    // bookId,
    image,
    bookName,
    author,
    category,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = location.state;

  const handleRead = () => {
    setDataToLocal("readBook", location.state);
  };
  const handleWishList = () => {
    setDataToLocal("wishList", location.state);
  };
  return (
    <div>
      <Container>
        <div className="hero h-fit  my-10 font">
          <div className="flex justify-center items-start flex-col lg:flex-row gap-10 md:gap-20">
            <div className="bg-gray-200 p-10 md:p-20 mx-auto w-2/3 lg:w-1/2  rounded-lg">
              <img src={image} className="rounded-lg  -rotate-10" />
            </div>
            <div className="lg:w-1/2 space-y-5">
              <h1 className="text-5xl font-bold">{bookName}</h1>
              <h2 className="text-2xl text-gray-500">By : {author}</h2>
              <h3 className="border-y-2 border-gray-300 py-3 text-xl font-semibold">
                {category}
              </h3>
              <p className="py-6 text-gray-500">
                {" "}
                <label className="font-bold text-black">Review:</label> {review}
              </p>
              <p className="text-xl font-bold border-b-2 pb-5 border-gray-300">
                Tag :{" "}
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn btn-group ml-4 bg-base-200 text-green-500"
                  >
                    # {tag}
                  </button>
                ))}
              </p>

              <p className="text-gray-500 font-bold">
                Number of Pages: {totalPages}
              </p>
              <p className="text-gray-500 font-bold">Publisher: {publisher}</p>
              <p className="text-gray-500 font-bold">
                Year of Publishing: {yearOfPublishing}{" "}
              </p>
              <p className="text-gray-500 font-bold">Rating : {rating}</p>
              <div>
                <button
                  onClick={() => handleRead()}
                  className="btn btn-lg mr-5 rounded-lg"
                >
                  Read
                </button>
                <button
                  onClick={() => handleWishList()}
                  className="btn btn-lg bg-blue-500 text-white rounded-lg"
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetails;
