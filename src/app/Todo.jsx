import { useEffect, useRef, useState } from "react";

import { Heading } from "@/components/atoms/Heading.jsx";
import { TodoDisplay } from "@/components/atoms/TodoDisplay.jsx";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("todoList"))) {
      const todoArr = JSON.parse(window.localStorage.getItem("todoList"));
      setTodoList(todoArr);
    }
  }, []);
  return (
    <>
      <h1 className="text-black font-black text-5xl">💡To-do List</h1>
      <br />
      <div className="">
        <Heading todo={todoList} setTodo={setTodoList} />
        <TodoDisplay todo={todoList} setTodo={setTodoList} />
      </div>
    </>
  );
};
