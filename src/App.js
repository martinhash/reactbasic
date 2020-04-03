import React from 'react';
import './App.css';


// function Helloworld(props){
//   return (
//     <div id="helloworld">
//       <h3>{props.subtitle}</h3>
//      {props.mytext}
//     </div>
//   );
// }

class Helloworld extends React.Component{


  state = {
    show: true
  }
  changeState = () => {
   this.setState({show:!this.state.show})
  }

  render(){
    if(this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.mytext}</h3>
          {this.props.subtitle}
          <button onClick={this.changeState}>Turn Off</button>
        </div>
      )
    }else{
      return <div>
        <h1>No existe nada</h1>
        <button onClick={this.changeState}>Turn On</button>
      </div> 
    }
  }
}

function App() {
  return (
   <div>
     App Component 
     <Helloworld mytext="Hola martin" subtitle="Mi descripcion"/>
    <Helloworld mytext="Hola Jose"/> 
    <Helloworld mytext="Hola Cmila"/>
   </div>
  );
}

export default App;
