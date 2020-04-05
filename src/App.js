import React, {Component} from 'react';
import './App.css';
import tasks from './examples/tasks.json';


//COMPONENTS
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm'

class App extends Component{

  state = {
    tasks: tasks 
  } 
  
  render(){
    return <div>
      <TaskForm/>
  <Tasks tasks={this.state.tasks}></Tasks> 1:36:00
    </div>
  }
}

export default App;
