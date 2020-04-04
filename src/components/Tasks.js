import React, {Component} from 'react';


class Tasks extends Component{
    render(){
        return  <div>
                    { this.props.tasks.map( element=> 
                        <p key={element.id}>
                            <li>{element.id}</li>
                            <li>{element.title}</li>
                            <li>{element.description}</li>
                        </p>
                    )}
                </div>
    }
}

export default Tasks;