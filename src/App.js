import React from 'react';
// import Todo from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'



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


  handleToggle = id => {
  // 1. make a copy of the state
  const stateCopy = this.state.todos.slice();
  // 2. update the copy with the opposite completed status
    const updatedCopy = stateCopy.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed; 
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({
       // 3. update the state with the updated copy
      todos: updatedCopy
    });
  };

  handleClearItems = e => {
    e.preventDefault();
    //  clear the completed items
    //1. find the uncompleted items
    const filtered = this.state.todos.filter(todo =>  !todo.completed)
    // console.log(filtered);
    // 2. set the state with the new state
    this.setState({
      todos: filtered
    })
  };


  // toggleTodo = todoId => {
  //   this.setState({
  //     todos: this.state.todos.map(todo => {
  //       if (todoId === todo.id) {
  //         return {
  //           ...todo, completed: !todo.completed
  //         };
  //       }
  //       return todo;
  //     })
  //   });
  // };

  render() {
    return (
      <div className="container">
        <h1>Todo List: MVP</h1>
        <TodoList
        todoItems={this.state.todos}
        handleToggle={this.handleToggle}
        />
        <TodoForm 
          handleClearItems={this.handleClearItems}
          handleChange={this.handleChange}
          inputText={this.state.inputText}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
