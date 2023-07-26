
//1 . think how create a page similar in component but diffrent in data  && its the primary concept

import logo from './logo.svg';

import './App.css';
import './person.css';

const number=222;
const country={name:'Banglades',people:'18 core',Region:'Asia'}

function App() {
  const country1=['Bangladesh','India','Pakistan '];
  // similar in loop and similar in data in object
  const country3=[
    {name:'Bangladesh',id:'201',region:'asia'},
    {name:'Ameria',id:'201',region:'ameris'},
    {name:'germanay',id:'203',region:'Europe'}
  ]
  return (
    <div className="App">
      {number+677} <br />
      Name:{country.name}  Pepole{country.people}
    {/* send data dynamically  */}
      <Person name='jakir HOssain' id='201' ></Person>  
      <Person  name='jakir HOssain munir ' id='202' ></Person>

      {
        country1.map(country=><Person name={country} ></Person>)
      }

      {
      country3.map(r=><Country  name20={r.name} ></Country>)
      }
     
    </div>
  );
}

export default App;

// create Componenett with tag and Return in function app.
// here is the main architecture loop similar in loop and diffrent in data 

function Person(props){  
  return(
    <div className='person'>
      <h5> {props.name}   </h5>
      <h6>  {props.id}</h6>
    </div>
  )
}

function Country(props){
  return(
    <div>
      name:{props.name20} Region:{}
    </div>
  )
}

//3.Pass dynamic data to components, props in react