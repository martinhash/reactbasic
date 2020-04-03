import React from 'react';
import './App.css';


function Helloworld(props){
  return (
    <div id="helloworld">
      <h3>{props.subtitle}</h3>
     {props.mytext}
    </div>
  );
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
