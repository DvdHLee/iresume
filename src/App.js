import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody";

function App() {
  const [tab, setTab] = useState(1);
  const tabSelector = (value) => {
    setTab(value);
  };

  return (
    <div className="App">
      <Header onChangeTab={tabSelector}></Header>
      <MainBody tabnum={tab}></MainBody>
    </div>
  );
}

export default App;
