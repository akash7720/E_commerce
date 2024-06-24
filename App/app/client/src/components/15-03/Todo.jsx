import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    console.log(todo, "todo")
    console.log(todos, "todos")

    function HandleChange(event) {
        setTodo(event.target.value)
    }

    function HandleSubmit() {
        setTodos([...todos, todo])
        setTodo("")
    }
    
    function HandleDelete(i) {
            const updatedTodos = [...todos];
            updatedTodos.splice(i, 1);
            setTodos(updatedTodos);
       
     }

     function handleAlldDelete(){
        setTodos([])
     }
    

    return (
        <div>
            <h3>Add Todo</h3>

            <input value={todo} onChange={HandleChange} type='text' placeholder='Do Lunch..' />
            <button onClick={HandleSubmit}>Submit</button>

             {todos.length ? <div>
              <h2>Your Todos :</h2> 
                  {todos.map((todo, i) => (
               <p key={i}>
                {i+ 1}.{todo}
                
                <button onClick={() => HandleDelete(i)}>Delete</button></p>
                ))}
                
                {todos.length>=1 &&   <button onClick={handleAlldDelete}>Remove All</button>}
               
                
            </div> : <h1>No todos found.</h1>}
            
        </div>
    )
}

export default Todo