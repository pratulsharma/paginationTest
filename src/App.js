import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import "./App.css";
import DispImage from "./DispImage";
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState([1]);
  const [countPerPage] = useState(6);

  const indexOfLastCount = currentPage * countPerPage;
  const indexOfFirstCount = indexOfLastCount - countPerPage;
  const currentCount = count.slice(indexOfFirstCount, indexOfLastCount);
  console.log("YYY", indexOfFirstCount, indexOfLastCount, currentCount);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClick = () => {
    setCount([...count, 1]);
    console.log("++", count);
  };
  return (
    <div className="flex-container">
      {/* <div className="row ">{displayImage()}</div> */}
      <DispImage counts={currentCount} />
      <Pagination
        postsPerPage={countPerPage}
        totalPosts={count.length}
        paginate={paginate}
      />
      <button class="btn btn-warning" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default App;
