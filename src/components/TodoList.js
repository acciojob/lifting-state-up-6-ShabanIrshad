import React from 'react';

const TodoList =(props)=>{
    const {todos,handleComplete}=props;
    console.log(todos);
    return (
        
        <>
            <h2>Child Component</h2>
            <ul>
                 {todos.map((todo,key)=>{
                    return <li key={key}><p>{todo.text}</p>{!todo.complete && <button onClick={()=>handleComplete(key)}>Complete</button>}</li>
                 })}
            </ul>
            
           
        </>

    );

}

export default TodoList;