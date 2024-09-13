import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "../src/components/Counter";

function App() {
  return (
    <Provider store={store}>
      <div>Store</div>
      <Counter />
    </Provider>
  );
}

export default App;
