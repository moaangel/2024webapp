const init = {
  value: 10,
  title: "test",
};

const reducer = (state = init, action) => {
  console.log(state);

  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }

  return state;
};

export default reducer;
