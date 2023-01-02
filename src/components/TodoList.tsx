import React from "react";
import { Todo } from "../model";
import "../styles/style.css";
import SingleTodo from "./SingleTodo";
interface PropsTodo {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: PropsTodo) => {
  return (
    <div>
      <div className="todos">
        {todos.map((todoRenders) => {
          return (
            <SingleTodo
              todoRenders={todoRenders}
              key={todoRenders.id}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
