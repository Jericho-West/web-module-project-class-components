import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

const todo = [
  {
    name: 'Default 1',
    key: "1"
  },
  {name: 'Default 2',
    key: "2"
  }
]

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }



  render() {
    return (
      <div>
       <Form />
       <TodoList todo={this.state.todo} />
      </div>
    )
  }
}
