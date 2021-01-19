import React, { useRef, useState } from "react";

const Content = ({ info, className, deleteTodo, goIng, goClear }) => {
  return (
    <section data-id={info.id} className={`content ${className}`}>
      <span className="text">{info.text}</span>
      <span className="emoji_wrapper">
        {className === "todo" ? (
          <>
            <span onClick={goIng} data-id={info.id}>
              ⏳
            </span>
          </>
        ) : className === "ing" ? (
          <>
            <span onClick={goClear} data-id={info.id}>
              ✔
            </span>
          </>
        ) : null}
        <span onClick={deleteTodo} data-id={info.id} data-type={className}>
          ❌
        </span>
      </span>
    </section>
  );
};

const FunctionToDo = ({ setPage }) => {
  const goHome = () => {
    setPage("home");
  };

  const todoInfo = useRef(null);

  const [todos, setTodos] = useState([]);
  const [ings, setIngs] = useState([]);
  const [clears, setClears] = useState([]);

  const insertTodo = () => {
    let id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    setTodos(
      todos.concat({
        id: id,
        text: todoInfo.current.value,
      })
    );
    todoInfo.current.value = "";
  };

  const deleteTodo = (e) => {
    if (e.target.dataset.type === "todo") {
      setTodos(todos.filter((todo) => todo.id !== parseInt(e.target.dataset.id)));
    } else if (e.target.dataset.type === "ing") {
      setIngs(ings.filter((ing) => ing.id !== parseInt(e.target.dataset.id)));
    } else {
      setClears(clears.filter((clear) => clear.id !== parseInt(e.target.dataset.id)));
    }
  };

  const goIng = (e) => {
    setTodos(todos.filter((todo) => todo.id !== parseInt(e.target.dataset.id)));
    let moveTodo = todos.filter((todo) => todo.id === parseInt(e.target.dataset.id));
    let ingLength = parseInt(ings.length);
    moveTodo[0].id = ingLength;
    let sortTodo = [];
    ings.map((ing, index) =>
      sortTodo.push({
        id: index,
        text: ing.text,
      })
    );
    setIngs(sortTodo.concat(moveTodo[0]));
  };

  const goClear = (e) => {
    setIngs(ings.filter((ing) => ing.id !== parseInt(e.target.dataset.id)));
    let moveTodo = ings.filter((ing) => ing.id === parseInt(e.target.dataset.id));
    let clearLength = parseInt(clears.length);
    moveTodo[0].id = clearLength;
    let sortTodo = [];
    clears.map((clear, index) =>
      sortTodo.push({
        id: index,
        text: clear.text,
      })
    );
    setClears(sortTodo.concat(moveTodo[0]));
  };

  return (
    <>
      <div className="main">
        <div className="logo" onClick={goHome}>
          DOT.
        </div>
        <div className="title">Function ToDo List</div>
        <div className="todo_list_wrapper">
          <div className="todos_wrapper">
            <header>🎈TODO</header>
            <div className="contents">
              <div className="add_wrapper">
                <input ref={todoInfo} type="text" placeholder="Enter your todos!" />
                <span className="btn_add" onClick={insertTodo}>
                  Add
                </span>
              </div>
              {todos.map((todo) => (
                <Content key={todo.id} info={todo} className="todo" deleteTodo={deleteTodo} goIng={goIng} />
              ))}
            </div>
          </div>
          <div className="ing_wrapper">
            <header>⏳ING</header>
            <div className="contents">
              {ings.map((ing) => (
                <Content key={ing.id} info={ing} className="ing" deleteTodo={deleteTodo} goClear={goClear} />
              ))}
            </div>
          </div>
          <div className="clear_wrapper">
            <header>✔CLEAR</header>
            <div className="contents">
              {clears.map((clear) => (
                <Content key={clear.id} info={clear} className="clear" deleteTodo={deleteTodo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionToDo;
