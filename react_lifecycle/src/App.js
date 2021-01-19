import React, { useState } from "react";
import "./css/reset.css";
import "./css/main.scss";
import ClassToDo from "./components/ClassComponents/ClassToDo";
import FunctionToDo from "./components/FunctionComponents/FunctionToDo";

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
        <div className="home">
          <h1>DOT REACT LIFECYCLE PRACTICE</h1>
          <h3>Select Components</h3>
          <span className="components" onClick={goClassPage}>
            Class
          </span>
          <span className="components" onClick={goFunctionPage}>
            Function
          </span>
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
