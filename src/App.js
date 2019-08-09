import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://chuck-norris-server-ir20o8vo3.now.sh/api"
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;
