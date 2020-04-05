import  React, { Component }  from 'react';
import PropTypes from 'prop-types';


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
                            <input type="checkbox" onChange={this.props.checkDone}/>
                            <button onClick={this.props.deleteTask} style={btnDelete}>X</button>
        </div>
    }


}

Task.propTypes = {
    task:PropTypes.object.isRequired
}

const btnDelete = {
    fontSize : '18px'
}
export default Task;