import React from "react";

import GlobalProvider from "./context/GlobalProvider";
import Header from "./components//header/Header";
import { Container } from "./components/container/Container";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="main">
        <Header />
        <Container />
      </div>
    </GlobalProvider>
  );
}

export default App;
