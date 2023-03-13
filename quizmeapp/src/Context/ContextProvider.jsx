import { Children, createContext } from "react";
import React from 'react'

export const AppContext = createContext();

const ContextProvider = ({children}) => {
    let values = {
        resust : [],
        questions : []
    }

    let params = {

    }

    let updateResust = (val)=>{
        values.resust = val
    }
    let updaataeQuestions = (val)=>{
        values.questions = val
    }

  return (
    <AppContext.Provider value={{updateResust, updaataeQuestions, values, params}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider