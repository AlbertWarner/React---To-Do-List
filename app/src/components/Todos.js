import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render() {
      /* this end receives it as props - like passing the object around */
      console.log(this.props.todos)
        /* inside the map is the same as a foreach todos as todo  */
      return this.props.todos.map((todo)=>(
          /* passing the object to TodoItem */
          /* pass through the key to make each object unique -> removes the warning from the console */
         <TodoItem key={todo.id} todo={todo} 
         markComplete = {this.props.markComplete} 
         delTodo = {this.props.delTodo}/>
      ));
   /*   return (
      //this is jsx use className not class
      <div >    
          <h1>ToDos</h1>
            <br></br>
           map method - high order of array method
          </div>
          );  */
  }
}
/* validation for properties of an object */
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  
}
// Do forgot to export - like closing a file 
export default Todos;
