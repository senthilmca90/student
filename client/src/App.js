import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import University from './components/University';

function App() {
  let techName ="Tech team" //let, const, var
  const[user, setUser] = useState({})
  const CatchChildData = (values) => {
      console.log(values)
      setUser(values)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p sss="ss">
          Edit to Tech team <code>src/App.js</code> and save to reload.
        </p>
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
