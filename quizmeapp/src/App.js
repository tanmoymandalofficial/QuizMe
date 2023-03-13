
import './App.css';

import React from 'react'

import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import {Routes,Route} from "react-router-dom";
import Result from "./Pages/Result"

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="result" element={<Result/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
