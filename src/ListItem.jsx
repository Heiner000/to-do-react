import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {

  state = {
    isChecked: false
  }

  handleCheck = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked
    }))
  }

  render() {
    const ifChecked = {
      textDecoration: this.state.isChecked ? "line-through" : "none"
    }

    return (
      <div>
        <li style={ifChecked}>
          <input 
            type="checkbox" 
            isChecked={this.state.checked}
            onChange={this.handleCheck} 
          /> {this.props.task}
          <button onClick={() => this.props.handleRemoveTask(this.props.index)}>❌</button>
        </li>  
      </div>
    )
  }
}

export default ListItem