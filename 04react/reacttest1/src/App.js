import React, { useState } from "react";
import ModalView from "./components/ModalView";
import "./index.css";

function App() {
  const [items, setItems] = useState(["한국", "미국", "중국"]);
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const modalClose = () => {
    setmodalOpen(false);
  };

  return (
    <div className="container">
      <div className="itemWrap">
        <h3>App</h3>
        {items.map((item, i) => {
          return (
            <>
              <div
                key={i}
                onClick={() => {
                  setmodalOpen(!modalOpen);
                  setModalIndex(i);
                }}
              >
                {item}
              </div>
            </>
          );
        })}
      </div>
      <div>
        <p>
          나라 : <input></input>
        </p>
      </div>
      {modalOpen ? (
        <ModalView vContent={items[modalIndex]} onClose={modalClose} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
        <p>상세보기</p>
        <button onClick={props.modalClose}>닫기</button>
      </div>
    </>
  );
}

export default App;
