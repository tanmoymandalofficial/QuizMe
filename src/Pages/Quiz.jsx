
import React, { useState,useContext,useEffect } from 'react';
import {AppContext} from '../Context/ContextProvider';
import { NavLink } from 'react-router-dom';

const Quiz = () => {
    const { values, updaataeQuestions, updateResust,params } = useContext(AppContext);
    const [question, setQuestion] = useState([]);
    const [number, setNum] = useState(0);

    useEffect(()=>{
        fetch(`https://opentdb.com/api.php?amount=${params.numQuestions}&category=${params.category}&difficulty=${params.difficulty}&type=multiple`)
        .then((res)=> res.json())
        .then((data)=>{
            setQuestion(data.results);
            console.log(data);
        })
    },[])

    const addResult = (e)=>{
        
        console.log(e.target.value)
    }
    console.log(question);

  return (
    <div> 
        {
            question.length === 0 ? <h1>Loding...</h1> :
            <div>
                <h2>{question[number].question}</h2>
                <select name="" id="" onChange={addResult}>
                    <option value={question[number].incorrect_answers[0]}>{question[number].incorrect_answers[0]}</option>
                    <option value={question[number].incorrect_answers[1]}>{question[number].incorrect_answers[1]}</option>
                    <option value={question[number].incorrect_answers[2]}>{question[number].incorrect_answers[2]}</option>
                    <option value={question[number].correct_answer}>{question[number].correct_answer}</option>
                </select>
                <br />
                <br />
                <button disabled ={question.length-1===number} onClick={()=>setNum((val)=>val+1)}>Next</button>
                <br />
                <br />
                <button disabled ={question.length-1!==number} >view</button>
            </div>
        }
    </div>
  )
}

export default Quiz