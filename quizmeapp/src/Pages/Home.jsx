import React, { useState,useContext } from 'react';
import {AppContext} from '../Context/ContextProvider';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('9');
    const [difficulty, setDifficulty] = useState('easy');
    const [numQuestions, setNumQuestions] = useState(10);
    

    const { values, updaataeQuestions, updateResust, params } = useContext(AppContext);


    const handleSubmit =  (e) => {
        e.preventDefault();

        // fetch(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
        // .then((res)=> res.json())
        // .then((data)=>{
        //     // console.log(data);
        //     updaataeQuestions(data)
        // })
        params.numQuestions = numQuestions;
        params.category = category;
        params.difficulty = difficulty;
        

      };

// onSubmit={handleSubmit}
  return (
    <div className="container mt-5">
      <h1>Quiz App</h1>
      <form > 
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty:</label>
          <select className="form-control" id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numQuestions">Number of Questions:</label>
          <input type="number" className="form-control" id="numQuestions" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} min="1" max="50" required />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}><NavLink to='/quiz'>Start</NavLink></button>
      </form>
    </div>
  )
}

export default Home