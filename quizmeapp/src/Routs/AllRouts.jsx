
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import Quiz from '../Pages/Quiz';
import Result from '../Pages/Result';
import Error from '../Pages/Error';

const AllRouts = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/quiz' element={ <Quiz/> }/>
            <Route path='/result' element={ <Result/> }/>
            <Route path='/*' element={ <Error/> }/>
        </Routes>
    </div>
  )
}

export default AllRouts