import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RegisterScreen from "./registerScreen";

function App() {
  return <RegisterScreen />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
