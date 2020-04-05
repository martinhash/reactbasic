import React, {Component} from 'react';

export default class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }


    onSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    onChange = e =>{
        console.log(e.target.name);
        console.log(e.target.value);
        
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
            value={this.state.title}></textarea>

            <input type="submit"/>

            </form>
        </div>
    }


}