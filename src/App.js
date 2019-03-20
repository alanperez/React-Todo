import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    }
  }

  messageChangeHandler = event => {
    this.setState({change: event.target.value})
  }




  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoForm change={this.state.change}/>
      </div>
    );
  }
}

export default App;
