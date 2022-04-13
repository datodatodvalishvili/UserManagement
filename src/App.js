import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Main from "./pages/Main";
import UserSettings from "./pages/UserSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:userID" element={<UserSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
