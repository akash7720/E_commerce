
import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"])
    }, [todos])

    return (
        <>
        <h1>UseCallBack</h1>
            <ChildComponent todos={todos} addTodo={addTodo} />
            <hr />
            <div>
               
               <h1> Counter: {count}</h1>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default UseCallback