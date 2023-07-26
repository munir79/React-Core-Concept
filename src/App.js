import logo from './logo.svg';
import './App.css';
const number=222;
const country={name:'Banglades',people:'18 core',Region:'Asia'}

function App() {
  return (
    <div className="App">
      {number+677} <br />
      Name:{country.name}  Pepole{country.people}
      <Person></Person>
     
    </div>
  );
}

export default App;

// create Componenett with tag and Return in function app.

function Person(){  
  return(
    <div>
      <h5> Jakir Hossain Munir </h5>
    </div>
  )
}