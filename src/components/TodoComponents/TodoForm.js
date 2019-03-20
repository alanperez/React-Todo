import React from "react"

const TodoForm = props => {
    return(
        <form>
            <input placeholder="..todo" onChaange={props.updateStateMEssage} />
    
        </form>
    )
}

export default TodoForm;