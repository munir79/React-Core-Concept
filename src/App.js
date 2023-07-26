
//1 . think how create a page similar in component but diffrent in data  && its the primary concept

import logo from './logo.svg';
import './App.css';
import './person.css';
const number=222;
const country={name:'Banglades',people:'18 core',Region:'Asia'}

function App() {
  return (
    <div className="App">
      {number+677} <br />
      Name:{country.name}  Pepole{country.people}
    {/* send data dynamically  */}
      <Person name='jakir HOssain' id='201' ></Person>  
      <Person  name='jakir HOssain munir ' id='202' ></Person>
     
    </div>
  );
}

export default App;

// create Componenett with tag and Return in function app.

function Person(props){  
  return(
    <div className='person'>
      <h5> {props.name}   </h5>
      <h6>  {props.id}</h6>
    </div>
  )
}

//3.Pass dynamic data to components, props in react