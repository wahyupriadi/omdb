/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import { Root } from "native-base";

import Home from "./src/container/Home";
import MovieList from "./src/container/MovieList";
import MovieDetail from "./src/container/MovieDetail";

import { createStore } from "redux";
import allReducer from "./src/container/__Reducer";
import { Provider } from "react-redux";

/* eslint-disable no-underscore-dangle */
let store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const App = () => {
  return (
    <Provider store={store}>
      <Router headerMode="none">
        <Stack key="root">
          <Scene key="home" component={Home} headerMode="none" initial />
          <Scene key="list" component={MovieList} headerMode="none" />
          <Scene headerMode="screen" key="detail" component={MovieDetail} />
        </Stack>
      </Router>
    </Provider>
  );
};

export default App;
