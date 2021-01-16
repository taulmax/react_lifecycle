import React from "react";

const FunctionToDo = ({ setPage }) => {
  const goHome = () => {
    setPage("home");
  };
  return (
    <>
      <button onClick={goHome}>Home</button>
      <div>FUNCTION TODO</div>
    </>
  );
};

export default FunctionToDo;
