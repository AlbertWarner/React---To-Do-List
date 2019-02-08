import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'; // create a random id - package 
class App extends Component {
  /* like create a json or back end db import */
  state ={
    todos: [
    {
      id: uuid.v4(),
      title: 'Take out the trash',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Meeting with Boss',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Buy Groceries',
      completed: false
    },
    ]}
    /* Create a mark completed on the Parent App and pass it down to children - inheritance */
    // Mark completed 
    markComplete =(id) =>{
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })});
  }
  //remove 
  delTodo =(id) =>{
    //filter high order array loop through on condition returns another array
    //below will show the state object which has not been click for delete
    //[...] spread opperator to copy what is in the state already 
    // pass in the id and show the ones not clicked
    // no back end just front end
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)]});
  }

  addTodo = (title) =>{
    /* console.log(title); */
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }
  render() {
    console.log(this.state.todos);
    return (
      //this is jsx use className not class
      <div className="App">
      <div className="container">
            <Header/>
            <AddTodo addTodo = {this.addTodo} />
         {/* inbed the todo component to the main app - like a html tag <Todos /> */}
         {/* todos={this.state.todos} passes the state - object to the Todos.js, console.log will have props displayed */}
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
      </div>
      </div>
    );
  }
}

export default App;
