import React from 'react'

export default class Todo extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    )
  }
}

