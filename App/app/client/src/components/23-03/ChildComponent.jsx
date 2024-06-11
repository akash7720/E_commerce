import React, { memo } from 'react'

const ChildComponent = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h1>My Todos</h1>
            {todos.map((todo, index) => {
                return <h4 key={index}>{todo}</h4>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
}

export default memo(ChildComponent)