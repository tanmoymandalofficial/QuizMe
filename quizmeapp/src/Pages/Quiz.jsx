import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
// import { loadData } from "../utils/Localstorage";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {

  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const loadData = (key) => {
    try {
      let temp = localStorage.getItem(key);
      temp = JSON.parse(temp);
      return temp;
    } catch (e) {
      return undefined;
    }
  };
  const [score, setScore] = useState(0);
  const [total,setTotal]=useState(0);
  const [bgcorrect, setBgcorrect] = useState("");
  const [bgwrong1, setBgwrong1] = useState("");
  const [bgwrong2, setBgwrong2] = useState("");
  const [bgwrong3, setBgwrong3] = useState("");
  const [page, setPage] = useState(0);
  console.log(page);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const appdata = useSelector((store) => store.appdata);
  var item = appdata[page];

  useEffect(() => {
    const queryparams = loadData("filters");

    dispatch(getData(queryparams));
    setTotal(appdata.length);
    saveData("total",total);
   
  }, [total]);

 
//   setTotal(appdata.length);

  const handlesubmit = () => {
    if (page == appdata.length - 1) {
      return navigate("../result");
    }
  };

  return (
    <div>
      <Heading fontSize="20px" padding="10px">
        Masai QuizMe
      </Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "start",
          gap: "20px",
        }}
      >
        {/* {data.map((item, index) => ( */}
        <div
          key={item.question}
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            width: "500px",
            padding: "16px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text fontWeight="bold">
              Category:{" "}
              <strong style={{ color: "brown" }}>{item.category}</strong>
            </Text>
            <Text fontWeight="bold">
              Difficulty:{" "}
              <strong style={{ color: "green" }}>{item.difficulty}</strong>{" "}
            </Text>
          </div>
          <br />
          <Heading fontSize="16px">
            {/* Q.{index + 1}. {item.question} */}
            Q.{page + 1} .{item.question}
          </Heading>
          <br />
          <p
            onClick={() => (
              toast({
                title: "Correct answer",
                description: "Your answer is correct",
                status: "success",
                duration: 1000,
                isClosable: true,
              }),
              setBgcorrect("green"),
              setScore((prev)=>prev+1),
              saveData("score", score)
            )}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              background: bgcorrect,
            }}
          >
            {item.correct_answer}
          </p>
          <p
            onClick={() => (
              setBgwrong1("red"),
              toast({
                title: "Wrong answer.",
                description: "The answer You have sellected is wrong",
                status: "error",
                duration: 1000,
                isClosable: true,
              })
            )}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              background: bgwrong1,
            }}
          >
            {item.incorrect_answers[0] ? item.incorrect_answers[0] : ""}
          </p>
          <p
            onClick={() => (
              setBgwrong2("red"),
              toast({
                title: "Wrong answer.",
                description: "The answer You have sellected is wrong",
                status: "error",
                duration: 1000,
                isClosable: true,
              })
            )}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              background: bgwrong2,
            }}
          >
            {item.incorrect_answers[1] ? item.incorrect_answers[1] : ""}
          </p>
          <p
            onClick={() => (
              setBgwrong3("red"),
              toast({
                title: "Wrong answer.",
                description: "The answer You have sellected is wrong",
                status: "error",
                duration: 1000,
                isClosable: true,
              })
            )}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              background: bgwrong3,
            }}
          >
            {item.incorrect_answers[2] ? item.incorrect_answers[2] : ""}
          </p>
        </div>
        {/* ))} */}
      </div>
      <br />
      <Flex gap="20px" justifyContent="center">
        <Button
          colorScheme="blue"
          onClick={() => {
            if (page >= 1 && page <= appdata.length - 1) {
              setPage((prev) => prev - 1);
              setBgcorrect("");
              setBgwrong1("");
              setBgwrong2("");
              setBgwrong3("");
            }
          }}
        >
          Prev
        </Button>

        <Button
          onClick={() => {
            if (page >= 0 && page < appdata.length - 1) {
              setPage((prev) => prev + 1);
              setBgcorrect("");
              setBgwrong1("");
              setBgwrong2("");
              setBgwrong3("");
            }
          }}
          colorScheme="blue"
        >
          Next
        </Button>

        <Button colorScheme="orange" onClick={handlesubmit}>
          Submit Quiz
        </Button>
      </Flex>
    </div>
  );
};

export default Quiz;
