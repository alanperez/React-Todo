import React from "react"

const TodoForm = props => {
    // console.log("TodoFormTEST: ", props.clearPurchased)
    return(
        <form action="">
            <input  
                    type="text"
                    placeholder="add task"
                    className="input" 
                    onChange= {props.handleChange}
                    value={props.inputText}
            />
            <button onClick={props.handleClick}>ADD TODO</button>
            <button onClick={props.handleClearItems}>REMOVE</button>
        </form>
        
    );
};

export default TodoForm;