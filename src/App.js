import React, {Component} from 'react';
import './App.css';
import tasks from './examples/tasks.json';
import Tasks from './components/Tasks';


class App extends Component{

  state = {
    tasks: tasks 
  } 
  
  render(){
    return <div>
  <Tasks tasks={this.state.tasks}></Tasks>
    </div>
  }
}

export default App;
