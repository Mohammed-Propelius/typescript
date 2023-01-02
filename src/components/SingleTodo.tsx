import React, { useEffect, useRef, useState } from "react";
import "../styles/style.css";
import { Todo } from "../model";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
type singleTodo = {
  todos: Todo[];
  todoRenders: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todoRenders, todos, setTodos }: singleTodo) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todoRenders.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todos) => {
        return todos.id === id
          ? { ...todos, isDone: !todos.isDone }
          : todoRenders;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form
      className="todos__single"
      onSubmit={(e) => handleEdit(e, todoRenders.id)}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : todoRenders.isDone ? (
        <s className="todos__single--text">{todoRenders.todo}</s>
      ) : (
        <span className="todos__single--text">{todoRenders.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todoRenders.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiOutlineEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todoRenders.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todoRenders.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
