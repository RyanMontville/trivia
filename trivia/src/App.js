import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1><a href="https://www.ryanmontville.com/">Ryan Montville</a> | Trivia</h1>
        <h2>Score: 0/0</h2>
      </header>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/:category' element={<Game />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
