import React, { useEffect } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const content : String = "Hello world";

    useEffect(() => {
      console.log(content)
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link to="/hello">Change Route</Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
}

export default Welcome;