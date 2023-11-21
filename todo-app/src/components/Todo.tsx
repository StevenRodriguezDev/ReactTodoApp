import React from 'react'

type TodoStatus = "active" | "inactive" | "open" | "close";

interface TodoProps {
    todo: string;
    status?: TodoStatus
}

export const Todo: React.FC<TodoProps> = ({ todo, status }) => {

    const handleClick = (event: React.MouseEvent) => {
        console.log(event.type);

    };

  return (
    <>
        <i>{todo}</i>
        <h2>{status}</h2>
        <button onClick={handleClick}>Change Text</button>
        <hr />
    </>
  );
};
