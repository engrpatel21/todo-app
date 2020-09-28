import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar'
import HomePage from '../HomePage/HomePage'
import Todo from '../Todo/Todo'
import AddTodo from '../AddTodo/AddTodo'
import * as todosApi from '../../services/todoService'
import EditTodo from '../EditTodo/EditTodo'


class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount(){
    const todos = await todosApi.getAll()
    this.setState({todos})
  }
  handleAddTodo = async newTodoData => {
    console.log('newtododata',newTodoData)
    const newTodo = await todosApi.create(newTodoData)
    console.log('newtodo', newTodo)
    this.setState({todos: [...this.state.todos, newTodo]},
        ()=> this.props.history.push('/todo'))
  }

  handleDeleteTodo = async id => {
    await todosApi.deleteTodo(id);
    this.setState({
    todos: this.state.todos.filter(t => t._id !== id)},
    () => this.props.history.push('/todo'))
  }

  handleUpdateTodo = async updatedTodoData => {
    const updatedTodo = await todosApi.update(updatedTodoData)
    const newTodoArray = this.state.todos.map(t => 
      t._id === updatedTodo._id ? updatedTodo: t)
    this.setState({
      todos: newTodoArray
    }, () => this.props.history.push('/todo'))
  }


  render() {
    return (
      <>
        <NavBar/>
        <Route
          exact path='/'
          render={() => 
          <HomePage 
            todos={this.state.todos}
            
            refresh={this.refreshPage}
          />
        }/>
        <Route
          exact path='/addtodo'
          render={() =>
        <AddTodo handleAddTodo={this.handleAddTodo} />
        }/>
        <Route
          exact path='/todo'
          render={({location}) =>
        <Todo
          handleUpdateTodo={this.handleUpdateTodo}
          handleDeleteTodo={this.handleDeleteTodo}
          location={location}
          todos={this.state.todos}
         />
        }/>
        <Route
          exact path='/edit'
          render={({location}) =>
        <EditTodo
          handleUpdateTodo={this.handleUpdateTodo}
          handleDeleteTodo={this.handleDeleteTodo}
          location={location}
          todos={this.state.todos}
         />
        }/>
      </>

    );
  }
}

export default App;
