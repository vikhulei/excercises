// import { useState } from "react";
// import { getToken } from "./Fetch";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/fetch/setTokenSlice";

const InterviewQuestions = () => {
  // const [token, setToken] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // const getData = async (url, data) => {
  //   const result = await getToken(url, data);
  //   const tokenData = result.data.token;
  //   setToken(tokenData);
  // };

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Plus</button>
      <br />
      <br />
      <div
        style={{
          width: "50vw",
          margin: "0 auto",
          // height: "100px",
          overflowWrap: "break-word"
        }}
      >
        <p>{count}</p>
      </div>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>Minus</button>
      <br />
      <br />
      <button>Add </button>
    </div>
  );

  // function plus(a, b) {
  //   return a + b;
  // }
  // console.log(plus(3, 4));
};

export default InterviewQuestions;
