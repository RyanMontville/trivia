import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [triviaCategory, setTriviaCategory] = useState("");
  const [score, setScore] = useState(0);
  const [numOfQuestions, setNum0fQuestions] = useState(0);

  return (
    <div className="App">
      <header>
        <h2><a href="https://www.ryanmontville.com/">Ryan Montville</a> | Trivia</h2>
        {triviaCategory !== "" && 
          <>
            <h2>{triviaCategory}</h2>
        <h2>Score: {score}/{numOfQuestions}</h2>
          </>
        }
      </header>
      <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<Home setData={setData} setTriviaCategory={setTriviaCategory} setNum0fQuestions={setNum0fQuestions} />} />
            <Route 
            path='/:category' 
            element={<Game data={data} setScore={setScore} score={score} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
