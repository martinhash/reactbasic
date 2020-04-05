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
      id: this.state.tasks.length
    }
    console.log(newTask);
    this.setState({
      tasks:[ ...this.state.tasks, newTask ]
    })
  }

  deleteTask = (id) =>{
    const taskToDelete =  this.state.tasks.filter( task => task.id !== id);
    this.setState({
      tasks: taskToDelete
    })
  }

  checkDone = (id) =>{
    const newTasks = this.state.tasks.map( task=>{
      if(id === task.id){
        task.done = !task.done
      }
      return task;
    })
    this.setState({
      tasks:newTasks
    })
  }

  render(){
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}></Tasks>
    </div>
  }
}

export default App;
