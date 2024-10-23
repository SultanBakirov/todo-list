import { Component } from 'react'
import './App.css'
import SingleTodo from './components/SingleTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: null,
      todos: {},
    };
  }

  handleTodoDelete = (todoId) => {
    const {todos} = this.state
    const newTodos = JSON.parse(JSON.stringify(todos))
    delete newTodos[todoId];
    this.setState({todos: newTodos})
  }

  handleTodoComplete = (status, todoId) => {
    const {todos} = this.state
    const newTodos = JSON.parse(JSON.stringify(todos))
    newTodos[todoId].completed = status;
    this.setState({todos: newTodos, editId: null})
  }

  handleInputChange = (inputValue, todoId) => {
    const { todos } = this.state;
    const newTodos = JSON.parse(JSON.stringify(todos));
    newTodos[todoId].text = inputValue;
    this.setState({ todos: newTodos });
  }

  handleEditIdChange = (todoId) => {
    this.setState({editId: todoId})
  }

  handleSaveIdChange = () => {
    this.setState({editId: null})
  };

  handleNewTodoInputChange = (e) => {
    this.setState({ newTodoText: e.target.value });
  };

  handleAddTodo = () => {
    const {newTodoText, todos} = this.state;
    if(newTodoText.trim() === '') {
      return;
    }

    const newTodoId = Date.now();

    const newTodos = {
      ...todos,
      [newTodoId]: {
        text: newTodoText,
        completed: false,
      }
    }

    this.setState({
      todos: newTodos,
      newTodoText: '',
    });
  }

  render() {
    const {todos, editId, newTodoText} = this.state;
    return (
      <div className="wrapper">
        <h1>Todo List App - Dom</h1>
        <div className="input-group mb-3">
          <input
            id="new-todo-input"
            type="text"
            className="form-control"
            placeholder="Add Text..."
            value={newTodoText}
            onChange={this.handleNewTodoInputChange}
          />
          <button 
            id="add-todo" 
            className="btn btn-primary" 
            type="button"
            onClick={this.handleAddTodo}>
            Add Todo
          </button>
        </div>
        <main>
          {
            Object.entries(todos).map(([key, value]) => {
              const  editMode = editId == key;
              return ( 
                <SingleTodo 
                key={key} 
                {...value} 
                id={key}
                editMode={editMode}
                handleTodoComplete={this.handleTodoComplete}
                handleTodoDelete={this.handleTodoDelete}
                handleEditIdChange={this.handleEditIdChange}
                handleSaveIdChange={this.handleSaveIdChange}
                handleInputChange={this.handleInputChange}/>
            )})
          }
        </main>
      </div>
    );
  }
}

export default App
