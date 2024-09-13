import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counterValue = useSelector((state) => state.value);
  const counterTitle = useSelector((state) => state.title);

  const dispatch = useDispatch();
  return (
    <>
      {counterValue} / {counterTitle}
      <button
        onClick={() => {
          dispatch({ type: "up", payload: 1 });
        }}
      >
        ++
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 1 });
        }}
      >
        --
      </button>
    </>
  );
}

export default Counter;
