import React, { Component } from 'react'

export class App extends Component {
  state = {
    resource: 'posts'
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resource: 'posts' })} className="ui button primary">Posts</button>
          <button onClick={() => this.setState({ resource: 'todos' })} className="ui button primary">Todos</button>
        </div>
        {this.state.resource}
      </div>
    )
  }
}

export default App