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
  

  addTask = (title, description) => {
  
    
    const newTask = {
      title: title,
      description: description,
      id: 45
    }
    console.log(newTask);
    this.setState({
      tasks:[ ...this.state.tasks, newTask ]
    })
    // console.log(this.state, newTask);
    // this.setState({
    //   tasks: [...this.state.tasks, newTask]
    // })

  }

  render(){
    return <div>
      <TaskForm addTask={this.addTask}/>
  <Tasks tasks={this.state.tasks}></Tasks> 1:36:00
    </div>
  }
}

export default App;
