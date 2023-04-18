import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: ""
  }

  handleChange = (e) => {
    console.log(e)
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ""
      }
    })
  }

  clearList = () => {
    console.log("clearing the list")
    this.setState({
      taskArray: []
    })
  }

  handleRemoveTask = (i) => {
    this.setState((prevState) => {
      const newTaskArray = prevState.taskArray.filter((_, idx) => idx !== i)
      return {taskArray: newTaskArray}
    })
  }
 

  render() {
    let todoItems = this.state.taskArray.map((item, idx) => {
      return (
        <ListItem
          task={ item }
          key={ 'todoItem' + idx }
          index={ idx }
          handleRemoveTask={ this.handleRemoveTask }
        />
      )
      })
    return(
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <form onSubmit={this.addItem}>
          <label htmlFor='newItem'>New Item: </label>
          <input
            id="newItem" 
            onChange={this.handleChange}
            value={this.state.newItem} 
            type="text" 
          />
          <button type="submit">Add To List</button>
      </form>
      <ul>
        { todoItems }
      </ul>
      <button onClick={this.clearList}>Finished the list!</button>
    </div>
    )
  }
}

export default MyList