import React from "react";

const WishList = ({ wBook, removeFromWishList }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    // category,
    rating,
    // tags,
    totalPages,
  } = wBook;

  const handleWishRemove = () => {
    removeFromWishList(bookId);
  };
  return (
    <div>
      <div className="card card-side shadow-xl border-2  border-gray-300 hover:shadow-gray-400 transition-shadow font">
        <figure>
          <img className="w-40" src={image} alt="book" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-black font-bold">{bookName}</h2>
          <p className="text-xl font-semibold">By : {author}</p>
          <p className="text-xl font-semibold">Pages : {totalPages}</p>
          <p className="text-xl font-semibold">Ratings : {rating}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleWishRemove()}
              className="btn btn-primary"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
