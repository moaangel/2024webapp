import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ok");
  }, [num]);

  useEffect(() => {
    console.log("good");
  }, [count]);

  return (
    <div>
      {num} / {count}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        123
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
