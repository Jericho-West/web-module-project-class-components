import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

const todo = [
  {
    name: 'Default 1',
    id: 1,
    completed: false
  },
  {name: 'Default 2',
    id: 2,
    completed: false
  }
]

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }

  add = (newTodo) => {
    //this.setState({name: this.changer, key: this.props.todo.length+1})
    console.log("Text")
    console.log(newTodo)
    console.log(this.props.todo)
    const newTodoObj = {
      name: newTodo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTodoObj]
    })
  }



  render() {
    return (
      <div>
       <TodoList todo={this.state.todo} />
       <Form todo={this.state.todo} add={this.add} />
      </div>
    )
  }
}


//