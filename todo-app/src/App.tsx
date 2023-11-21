import React, { useEffect, useState } from 'react'
import { Todo } from "./components/Todo";

interface DataTodo {
 todos: {
    completed: boolean;
    id: number;
    todo: string;
    userId: number;
  }[];
  total: number;
  skip: number;
  limit: number;
}

export const App: React.FC = () => {
  const [name, setName] = useState("Steve");
  const [isActive, setIsActive] = useState(false);
  const [todosList, setTodosList] = useState<DataTodo>();

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("https://dummyjson.com/todos");
      const result  = await data.json();
      console.log(result);
      setTodosList(result); 
    };
    getTodos();
  }, [])
  

  return (
    <div>
      {todosList?.todos.map((todo) => {
        return (
           <Todo 
           key={todo.id} 
           todo={todo.todo} 
           status={todo.completed ? "active":"inactive"}
        />
        );
    })}
    </div>
  );
};
