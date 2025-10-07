import Swal from "sweetalert2";

const getDataFromLocal = (key) => {
  const getDataFromLocal = localStorage.getItem(key);
  return getDataFromLocal ? JSON.parse(getDataFromLocal) : [];
};

const setDataToLocal = (key, data) => {
  const existingData = getDataFromLocal(key);
  const matchedData = existingData.some(
    (exData) => exData.bookId === data.bookId
  );

  if (matchedData) {
    Swal.fire({
      title: `Already exist in ${key}`,
      icon: "error",
    });
  } else {
    Swal.fire({
      title: `Successfully added to ${key}`,
      icon: "success",
    });
    existingData.push(data);
    const wholeData = JSON.stringify(existingData);
    localStorage.setItem(key, wholeData);
  }
};

const setUpdateToLocal = (key, bookId) => {
  const existingData = getDataFromLocal(key);
  const updatedData = existingData.filter((books) => books.bookId !== bookId);
  localStorage.setItem(key, JSON.stringify(updatedData));
};
export { setDataToLocal, getDataFromLocal, setUpdateToLocal };
// const getDataFromLocal = () => {
//   const getDataFromLocal = localStorage.getItem("bookData");

//   if (getDataFromLocal) {
//     const existingData = JSON.parse(getDataFromLocal);
//     return existingData;
//   } else {
//     return [];
//   }
// };

// const setDataToLocal = (data) => {
//   const existingData = getDataFromLocal();
//   console.log(existingData);
//   const matchedData = existingData.some(
//     (exData) => exData.bookId === data.bookId
//   );
//   if (matchedData) {
//     alert("data already exist");
//   } else {
//     alert("successfully added");
//     existingData.push(data);
//     const wholeData = JSON.stringify(existingData);
//     localStorage.setItem("bookData", wholeData);
//   }
// };

// export { setDataToLocal, getDataFromLocal };
