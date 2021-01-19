import React, { Component } from "react";

class ClassToDo extends Component {
  render() {
    const goHome = () => {
      this.props.setPage("home");
    };
    return (
      <>
        <button onClick={goHome}>HOME</button>
        <div>CLASS TODO</div>
      </>
    );
  }
}

export default ClassToDo;
