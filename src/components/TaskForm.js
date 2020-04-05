import React, {Component} from 'react';

export default class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }


    onSubmit = (event) => {
        this.props.addTask(this.state.title, this.state.description)
        event.preventDefault();
    }

    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return <div>
            <form  onSubmit={this.onSubmit}>

            <input 
            placeholder="Title" 
            type="text"      
            name="title"    
            onChange={this.onChange} 
            value={this.state.title}/>

            <br/>

            <textarea
            placeholder="Write your description"  
            name="description"    
            onChange={this.onChange} 
            value={this.state.description}></textarea>

            <input type="submit"/>

            </form>
        </div>
    }


}