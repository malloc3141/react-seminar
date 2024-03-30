import { useRef } from "react";
import { json } from "react-router-dom";

export const Heading = ({ todo, setTodo }) => {
  const userInput = useRef(null);

  function addElement() {
    var todoArr = [];
    if (window.localStorage.getItem("todoList")) {
      // if element exists
      todoArr = JSON.parse(window.localStorage.getItem("todoList"));
    } else {
      window.localStorage.setItem("todoList", JSON.stringify(todoArr));
    }
    if (userInput.current.value) {
      todoArr.push({
        id: Date.now(),
        text: userInput.current.value,
        checked: false,
        modifying: false,
      });
    }

    window.localStorage.setItem("todoList", JSON.stringify(todoArr));
    setTodo(todoArr);
    userInput.current.value = "";
    // Below is for debugging
    for (let i = 0; i < todoArr.length; i++) {
      console.log(todoArr[i]);
    }
  }
  return (
    <div>
      <input
        className="text-gray text-l rounded ml-2 inline border border-solid border-white bg-white shadow w-2/5 pl-3"
        ref={userInput}
        type="text"
        placeholder="Input Todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addElement();
          }
        }}
        autoFocus
      />
      <button
        id="addTodo"
        onClick={addElement}
        className="text-black hover::text-orange bg-orange hover::bg-white ml-2"
      >
        Add
      </button>

      <button
        className="text-black hover::text-orange bg-orange hover::bg-white ml-2"
        onClick={() => {
          window.localStorage.setItem("todoList", JSON.stringify([]));
          setTodo([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
};
