import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    // fields in the state 
    // require a onchange event to take data from input and add it to state object
    state ={
        title: ' '
    }
    //this only happens in the AddTodo so just add it to this state object
    //use onchange because when the user types the onchange updates the state 
   /*  onChange = (e) =>this.setState({ title: e.target.value}); */
   //this method will work for multiple form inputs
    onChange = (e) =>this.setState({ [e.target.name]: e.target.value});

    onSubmit = (e) =>{
        e.preventDefault(); //stops the form from submitting to the controller - go to another page
        this.props.addTodo(this.state.title); 
        this.setState({title: ''}); // clear the add to do
    }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display:'flex'}}>
          <input type="text" name="title" placeholder="Add To Do.." style={{flex:'10', padding:'5px'}} value={this.state.title} onChange={this.onChange} />

          <input type="submit" value="submit" className="btn"  style={{flex:'1'}}/>
      </form>
    )
  }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    
  }
export default AddTodo
// rce tab -> shortcut (Download ES7 React snipets)