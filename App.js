import React, { Component } from "react";
import { Provider } from "react-redux";

//import store1 from "./store";
import configureStore from "./store";

import Navigation from './Navigation'
const store = configureStore();

const App = () => {
  // console.log(store.products);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};



export default App;
