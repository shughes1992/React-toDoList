import React from "react";

const ToDo = ({ todo, toggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        toggle(e.currentTarget.id)
    }
    return (
        <div class name={todo.done ? "complete" : ""} onClick={handleClick} id={todo.id}>
            {todo.todo}
        </div>
    )
}

export default ToDo;