import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Result from "./containers/Result";

const houses = ["Serpentard", "Griffondor", "Serdaigle", "Pouffsoufle"];

const reducer = (
  state = { houses: houses, selectedHouse: "Griffondor" },
  action
) => {
  switch (action.type) {
    case "UPDATE_CHOICE_WITH_MY_INDEX":
      return { ...state, selectedHouse: houses[action.indexSelected] };
    default:
      return state;
  }
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Result />
    </Provider>
  );
}

export default App;
