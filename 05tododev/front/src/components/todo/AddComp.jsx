import React, { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

function AddComp() {
  const [todo, setTodo] = useState({ ...initState });
  //   const [title, setTitle] = useState("");
  const [result, setResult] = useState(null);

  const { moveToList } = useCustomMove();

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
    console.log(todo);
  };

  const handleClickAdd = () => {
    postAdd(todo)
      .then((res) => {
        console.log("추가데이터 ");
        console.log(res);
        setResult(res.TNO);
        setTodo({ ...initState });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const closeModal = () => {
    setResult(null);
    moveToList();
  };
  return (
    <div>
      {result ? (
        <ResultModal
          title="글쓰기추가"
          content={`새로운 ${result} 추가완료`}
          callbackFn={closeModal}
        />
      ) : null}
      ;
      <div className="flex gap-2">
        <div>title</div>
        {/* <input
          type="text"
          className="border-gray-300 border-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> */}
        <input
          type="text"
          name="title"
          className="border-gray-300 border-2"
          value={todo.title}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex gap-2">
        <div>writer</div>
        {/* <input
          type="text"
          className="border-gray-300 border-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> */}
        <input
          type="text"
          name="writer"
          className="border-gray-300 border-2"
          value={todo.writer}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex gap-2">
        <div>dueDate</div>
        {/* <input
          type="text"
          className="border-gray-300 border-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> */}
        <input
          type="date"
          name="dueDate"
          className="border-gray-300 border-2"
          value={todo.dueDate}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex my-3 justify-end">
        <button
          className="bg-blue-200 rounded py-2 px-4 text-white font-bold hover:bg-gray-600"
          onClick={handleClickAdd}
        >
          <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">글쓰기</p>
        </button>
      </div>
    </div>
  );
}

export default AddComp;
