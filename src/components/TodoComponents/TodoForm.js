import React from "react"

const TodoForm = props => {
    return(
        <form action="">
            <input  
                    type="text"
                    // placeholder="add task"
                    className="input" 
                    onChange= {props.handleChange}
                    value={props.inputText}
            />
            <button onClick={props.handleClick}>ADD TODO</button>
            <button onChange={props.clearBtn}>REMOVE</button>
        </form>
        
    );
};

export default TodoForm;