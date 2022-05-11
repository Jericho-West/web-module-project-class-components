import React from 'react'
import Todo from './Todo';


export default class Form extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {
    changer: ""
    };  
    console.log(props)
}

change = evt => {
  const { name, value } = evt.target
  //this.changer = {[name]: value}
  this.setState({changer: value})
}

z = (e) => {
  e.preventDefault()
}

  render() {

    console.log(this.state)

    return (
      <div>
        <label>Form</label>
          <input
          value = {this.state.changer}
          type="textbox" 
          name="name"
          placeholder="Add To-Do"
          onChange={this.change}
           />


          <button 
          type="submit"
          onClick={() => this.props.add(this.state.changer)}
          onSubmit={this.z}
          >Submit</button>
      </div>
    )
  }
}