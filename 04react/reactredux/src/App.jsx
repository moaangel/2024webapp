import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initialData = {
  cart: [],
};

const reducer = (state = initialData, action) => {
  console.log(action);

  switch (action.type) {
    case "add_cart":
      return { ...state, cart: [...state.cart, action.payload] };

    case "remove_cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>shop</div>
      <hr />
      <Productlist />
      <hr />
      <Cart />
    </Provider>
  );
}

const products = [
  { id: 1, name: "product1" },
  { id: 2, name: "product2" },
  { id: 3, name: "product3" },
  { id: 4, name: "product4" },
];

function Productlist() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (item) => {
    dispatch({ type: "add_cart", payload: item });
  };

  return (
    <>
      <div>product / cart{cartItems.length}</div>
      {products.map((item, i) => {
        return (
          <div key={i}>
            {item.id} / {item.name}
            <button
              onClick={() => {
                return addCart(item);
              }}
            >
              장바구니 추가
            </button>
          </div>
        );
      })}
    </>
  );
}
function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (item) => {
    dispatch({ type: "remove_cart", payload: item });
  };
  return (
    <>
      <div>Cart</div>
      {cartItems.map((item, i) => {
        return (
          <div key={i}>
            {item.id} / {item.name}
            <button
              onClick={() => {
                return removeCart(item.id);
              }}
            >
              장바구니 삭제
            </button>
          </div>
        );
      })}
    </>
  );
}
export default App;
