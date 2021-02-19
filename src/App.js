import React from "react";
import { Provider } from "react-redux";
import Canvas from "./components/Canvas";

function App({ store }) {
  return (
    <Provider store={store}>
      <Canvas />
    </Provider>
  );
}

export default App;
