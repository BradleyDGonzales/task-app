import './App.css';
import React, { Component } from 'react';
import Overview from './components/Overview'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([e.target[0].value]),
    })
  }
  render() {
    const {tasks} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='task'>Enter a task</label>
          <input id='task' type="text" />
          <input type='submit' />
        </form>
        <Overview tasks={tasks}/>
      </div>
    )
  }
}

export default App;
