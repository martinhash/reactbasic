import  React, { Component }  from 'react';


class Task extends Component{
    render(){
        return <div>
                            <li>{this.props.task.id}</li>
                            <li>{this.props.task.title}</li>
                            <li>{this.props.task.description}</li>
                            <input type="checkbox"></input>
                            <button>X</button>
        </div>
    }
}
export default Task;