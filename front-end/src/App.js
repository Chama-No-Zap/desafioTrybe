import React from "react";
import "./assets/styles/global.css";
import Routes from "./routes";
import FiltersProvider from "./context/FiltersContext";

function App() {
  return (
    <div className="container">
      <FiltersProvider>
        <Routes />
      </FiltersProvider>
    </div>
  );
}

export default App;
