import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import widgetData from "./data/widgets.json";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Dashboard />
    </div>
  );
}

export default App;
