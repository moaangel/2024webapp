import React, { useEffect, useState } from "react";
import axois from "axios";

function App() {
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState([]);
  const listCnt = 10;
  const pagerCnt = 5;
  const [currentpage, setCurrentpage] = useState(1);

  useEffect(() => {
    api();
  }, []);

  const api = () => {
    axois.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      console.log(res);
      setTotalPage(res.data.length / listCnt);
    });
  };

  const pageViewNumber = () => {
    const pagerNumbers = [];
    const startPage = Math.floor(((currentpage - 1) / pagerCnt) * pagerCnt + 1);
    const endPage = Math.min(startPage + pagerCnt - 1, totalPage);

    for (let i = startPage; i <= endPage; i++) {
      pagerNumbers.push(
        <span
          onClick={() => {
            setCurrentpage(i);
          }}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            color: currentpage === i ? "red" : "black",
          }}
        >
          {i}
        </span>
      );
    }
  };

  const currentPageData = () => {
    const startIndex = (currentpage - 1) * listCnt;
    const endIndex = startIndex + listCnt;

    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div>
        <h2>AXIOSSTUDY</h2>
        <p>TOTALPAGE : {totalPage}</p>
      </div>
      {currentPageData().map((item, i) => {
        return (
          <div key={i}>
            {item.id} : {item.title}
          </div>
        );
      })}
      <div style={{ fontSize: "2em" }}>{pageViewNumber()}</div>

      <button>이전</button>
      <button>다음</button>
    </div>
  );
}

export default App;
