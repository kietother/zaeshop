import React, { useEffect } from 'react';
import '../../App.css';

const HelloPage = () => {
    const content : String = "Hello world";

    useEffect(() => {
      console.log(content)
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello React
          </p>
        </header>
      </div>
    );
}

export default HelloPage;