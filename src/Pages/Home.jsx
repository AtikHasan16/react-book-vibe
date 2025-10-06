import { useLoaderData } from "react-router";
import Banner from "../Components/Banner";
import BooksData from "../Components/BooksData";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const booksData = useLoaderData();
  const { data } = booksData;

  return (
    <>
      <Banner></Banner>
      <BooksData data={data}></BooksData>
    </>
  );
};

export default Home;
