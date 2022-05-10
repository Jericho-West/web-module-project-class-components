import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <div>
        {this.props.todo.map(item => (
          <Todo key={item.key} item={item} />
        ))}
      </div>
    )
  }
}

