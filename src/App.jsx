import React from "react";
import { Routes, Route } from "react-router";
import Home from "./views/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
