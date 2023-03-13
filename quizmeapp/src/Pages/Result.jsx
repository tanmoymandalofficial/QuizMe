import { Heading } from '@chakra-ui/react';
import React from 'react'

const Result = () => {

  const loadData = (key) => {
    try {
      let temp = localStorage.getItem(key);
      temp = JSON.parse(temp);
      return temp;
    } catch (e) {
      return undefined;
    }
  };
    var score=loadData("score");
   var total=loadData("total");

  return ( 
    <div>


        <Heading fontSize="20px">Correct answers count: {score+1}</Heading>
        <Heading fontSize="20px">Incorrect answers count: {total}</Heading>
        <Heading fontSize="20px">Total score: {total}</Heading>
        <Heading fontSize="20px">Percentage: {"50%"}</Heading>
    </div>
  )
}

export default Result;