import React, { useState } from "react";
import ClassToDo from "./components/ClassToDo";
import FunctionToDo from "./components/FunctionToDo";

const App = () => {
  const [page, setPage] = useState("home");
  const goClassPage = () => {
    setPage("class");
  };
  const goFunctionPage = () => {
    setPage("function");
  };
  return (
    <>
      {page === "home" ? (
        <div>
          <h1>컴포넌트 선택</h1>
          <button onClick={goClassPage}>클래스형 컴포넌트</button>
          <button onClick={goFunctionPage}>함수형 컴포넌트</button>
        </div>
      ) : page === "class" ? (
        <ClassToDo setPage={setPage} />
      ) : page === "function" ? (
        <FunctionToDo setPage={setPage} />
      ) : (
        <h1>당신 어떻게 들어온거야..</h1>
      )}
    </>
  );
};

export default App;
