import React from "react";

const ListCard = ({ listBook }) => {
  const {
    // bookId,
    image,
    bookName,
    author,
    // category,
    rating,
    // tags,
    totalPages,
  } = listBook;
  return (
    <div>
      <div className="card card-side shadow-xl hover:shadow-gray-400 font">
        <figure>
          <img className="w-40" src={image} alt="book" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-black font-bold">{bookName}</h2>
          <p className="text-xl font-semibold">By : {author}</p>
          <p className="text-xl font-semibold">Pages : {totalPages}</p>
          <p className="text-xl font-semibold">Ratings : {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
