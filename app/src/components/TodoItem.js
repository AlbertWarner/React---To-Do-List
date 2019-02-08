import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    /* create a function for style that puts a line through a completed To Do */
    getStyle = () => {
        //old way        
       /*  if(this.props.todo.completed){
            return { textDecoration: 'line-through'}
        }
        else{
            return { textDecoration: 'none'}
        } */

        //new way
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? /*Turnery operator -> same as the if statement above (?) means if this is true and (:) means else */
            'line-through': 'none'
        }
    }
    /* use arrow function => binds the objects to this */
    /* custome method created, it doesn't have access to this(object) use => to gain access to this */
    /* markComplete =(e) =>{
        console.log(this.props)
    } */

  render() {
      //Declare variables -> inherited variables from todo and the below you dont need to go this.props.todo 
      const {id,title } = this.props.todo;
    return (
        /* <div style={{backgroundColor: '#f4f4f4'}}> -> inline styling */
        /* <div style={itemStyle}> -> pass in the variable*/
        /* {' '} Creates a space between the checkbox and words =>using expression */
        /* props gives access to the parent of App.js files -> so if pass it through from ToDos.js then to App.js. The TodoItem gets the user interaction passes it up */
        /*  markComplete.bind(this, this.props.todo.id) -> allows to get the id of the object */
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p> 
      </div>
    )
  }
}
/* validation for properties of an object */
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  }
  /* Create styling variables */
 /*  const itemStyle = {
      backgroundColor: '#f4f4f4'
  } */

  const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 9px',
      borderRadius : '50%',
      cursor: 'pointer',
      float: 'right'
  }
export default TodoItem
