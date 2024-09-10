import React from "react";

function ModalView({ vContent, onClose }) {
  return (
    <div className="ModalWrap">
      <div className="modalBg">
        ModalView
        <p>{vContent}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default ModalView;
