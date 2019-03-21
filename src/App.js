import React from 'react';
// import Todo from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'



const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "",
    id: Date.now(),
    completed:false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      todos: todoData,
      inputText: ""
    };
  }

  handleChange = event => {
    this.setState({inputText: event.target.value});
  };
  handleClick = e => {
    e.preventDefault();
    // 1. make shallow copy of the old todo
    // const copyOfOldTodo = { ... this.state.todos};
    // 2. add a new todo
    const newTodo = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputText: ''
    });
  };

  clearBtn = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todoItems={this.state.todos}/>
        <TodoForm 
          handleChange={this.handleChange}
          inputText={this.state.inputText}
          handleClick={this.handleClick}
          clearBtn={this.clearBtn}
        />
      </div>
    );
  }
}

export default App;
