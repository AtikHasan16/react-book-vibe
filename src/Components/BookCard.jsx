import { Star } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({ data }) => {
  const { bookId, image, bookName, author, category, rating, tags } = data;

  return (
    <div className="card bg-base-100 w-full shadow-sm font">
      <figure className="bg-gray-200 p-5">
        <img
          className="bg-cover w-40 h-60 rounded-xl"
          src={image}
          alt="Books"
        />
      </figure>

      <div className="card-body">
        <div className="card-actions justify-end">
          <div className=" font-semibold text-gray-500">{category}</div>
          <div className=" font-semibold text-gray-500 ">{tags[0]}</div>
        </div>
        <p>{category}</p>
        <div className="card-title">
          <h2>{bookName}</h2>
          <p className="border inline  text-sm text-right rounded-2xl p-2">
            By : {author}
          </p>
        </div>
        <p className="flex items-center gap-2">
          Rating : {rating}
          <Star size={16}></Star>
        </p>
        <Link to={`bookDetails/${bookId}`} state={data}>
          <button className="btn btn-block btn-primary rounded-xl">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
