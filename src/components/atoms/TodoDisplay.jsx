import { useRef } from "react";

export const TodoDisplay = ({ todo, setTodo }) => {
  const userInput = useRef(null);

  function modifyElement(todoElement) {
    const todoArr = JSON.parse(window.localStorage.getItem("todoList"));
    var tmpIndex = 0;
    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].id === todoElement.id) {
        todoArr[i].modifying = !todoArr[i].modifying;
        tmpIndex = i;
        break;
      }
    }
    window.localStorage.setItem("todoList", JSON.stringify(todoArr));
    setTodo(todoArr);

    if (todoElement.modifying && userInput.current) {
      const todoArr = JSON.parse(window.localStorage.getItem("todoList"));
      todoArr[tmpIndex].text = userInput.current.value;
      window.localStorage.setItem("todoList", JSON.stringify(todoArr));
      setTodo(todoArr);
    }
  }

  var display = "";

  if (todo) {
    display = todo.map((todoElement) => (
      <li className="" key={todoElement.id}>
        <div className="float-left clear-both">
          <input
            className="mt-8"
            type="checkbox"
            value={todoElement.checked}
            defaultChecked={todoElement.checked}
            onChange={() => {
              const todoArr = JSON.parse(window.localStorage.getItem("todoList"));
              for (let i = 0; i < todoArr.length; i++) {
                if (todoArr[i].id === todoElement.id) {
                  todoArr[i].checked = !todoArr[i].checked;
                  break;
                }
              }
              window.localStorage.setItem("todoList", JSON.stringify(todoArr));
              setTodo(todoArr);
            }}
          ></input>
          <h4 className="inline ml-2">
            {todoElement.modifying ? (
              <input
                autoFocus
                ref={userInput}
                defaultValue={todoElement.text}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && todoElement.modifying && userInput.current) {
                    modifyElement(todoElement);
                  }
                }}
              ></input>
            ) : todoElement.checked ? (
              <del>{todoElement.text}</del>
            ) : (
              todoElement.text
            )}
          </h4>
        </div>

        <div className="float-right">
          <button
            className="mr-4 mt-8"
            onClick={() => {
              modifyElement(todoElement);
            }}
          >
            {todoElement.modifying ? "OK" : "Modify"}
          </button>
          <button
            className="mr-96 mt-8"
            onClick={() => {
              const todoArr = JSON.parse(window.localStorage.getItem("todoList"));
              for (let i = 0; i < todoArr.length; i++) {
                if (todoArr[i].id === todoElement.id) {
                  todoArr.splice(i, 1);
                  break;
                }
              }
              window.localStorage.setItem("todoList", JSON.stringify(todoArr));
              setTodo(todoArr);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    ));
  }
  return <ul>{display}</ul>;
};
