import  React, { Component }  from 'react';

class Task extends Component{

    StyleCompleted(){
        return{
            fontSize:"20px",
            color: this.props.task.done ? 'green':'gray',
            textDecoration:'none'
        }
    }

    render(){
        return <div style={this.StyleCompleted()}>
                            <li>{this.props.task.id}</li>
                            <li>{this.props.task.title}</li>
                            <li>{this.props.task.description}</li>
                            <input type="checkbox"></input>
                            <button style={btnDelete}>X</button>
        </div>
    }


}
const btnDelete = {
    fontSize : '18px'
}
export default Task;