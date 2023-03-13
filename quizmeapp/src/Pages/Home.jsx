import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getData } from "../Redux/action";
// import { saveData } from "../utils/Localstorage";

const Home = () => {
  
  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [noofq, setNoofq] = useState(10);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const appdata = useSelector((store) => store.appdata);
//   console.log(appdata);

  const handleform = (event) => {
    event.preventDefault();
    const queryparams = {
      params: {
        amount: noofq,
        difficulty: difficulty,
        category: Category,
      },
    };

    dispatch(getData(queryparams)).then(() => navigate("/quiz"));
    // console.log("submitted");
    saveData("filters",queryparams);

  };

  return (
    <div>
        <Heading fontSize="40px">Set up your Quiz</Heading>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",
          alignItems: "center",
          height: "100vh",

        }}
        
      >
        
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            gap: "30px",
            boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding:"10px",
            borderRadius:"10px",
            marginTop:"-20%",
            // height:"40%"
          }}
        >
          
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="21">Sports</option>
            <option value="9">General Knowledge</option>
            <option value="22">Geography</option>
          </select>
          <select onChange={(e) => setDifficulty(e.target.value)}>
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <input
            type="number"
            placeholder="Choose number of Question"
            onChange={(e) => setNoofq(e.target.value)}
          />
          <button style={{ background: "indigo",color:"white" }} onClick={handleform}>
            START QUIZ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
