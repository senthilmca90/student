import { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import University from './components/University';
import EsFeature from './components/EsFeature';
//import and export
// const University = require('./components/University')

function App() {
  let techName ="Tech team 1" //let, const, var
  const[user, setUser] = useState({})
  const CatchChildData = (values) => {
      console.log(values)
      setUser(values)
  }
 
  return (
    <div className="App">
      <header className="App-header">
      {/* <NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p sss="ss">
          Edit to Tech team <code>src/App.js</code> and save to reload.
        </p>
        <EsFeature />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
          Learn React 1 {user?.name}
        </a>
        
        <University name={techName}  className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" catchChildHandler={CatchChildData} />
      </header>
    </div>
  );
}

export default App;
