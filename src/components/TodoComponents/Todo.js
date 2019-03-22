import React from "react"
import './Todo.css';

const Todo = props => {
    console.log(props)
    return (
        <p 
        // {`${props.todoInfo.completed}`}\
        // className={`${props.todoInfo.completed ? 'completed' : null}`}
            className={props.todoInfo.completed ? 'completed' : null}
            onClick={() => { 
            props.handleToggle(props.todoInfo.id);
            }}
        >
            {props.todoInfo.task}
        </p>
        );
    };
export default Todo;

// statement ? item1 : item2
// if statement is true, return item1 if false, return item2
//props.todoInfo.completed ? 'completed' : null