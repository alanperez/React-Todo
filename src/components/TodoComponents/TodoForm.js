import React from "react"

const TodoForm = props => {
    return(
        <form>
            <input  type='text' 
                    placeholder='task' 
                    name='input' 
                    value={props.id}
                    onChange= {props.handleChange} 
            />
            <button onClick={props.addTask}>ADD TODO</button>
            <button onClick={props.removeTask}>REMOVE</button>
        </form>
        
    )
}

export default TodoForm;