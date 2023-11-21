import React, { useEffect, useState } from 'react'

interface DataTodo {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
}

export const App: React.FC = () => {
  const [name, setName] = useState("Steve");
  const [isActive, setIsActive] = useState(false);
  const [todosList, setTodosList] = useState<DataTodo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("https://dummyjson.com/todos");
      const result  = await data.json();
      console.log(result.todos);
      setTodosList(result.todos);
    };
    getTodos();
  }, [])
  

  return (
    <div>{
      todosList.map((todo) => {
        return <div key={todo.id}>{todo.todo}</div>
    })
    }</div>
  )
};
