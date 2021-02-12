import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Item} from "./components/component";
import ReactPageScroller from "react-page-scroller";


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <div className={"square"}/>
        <div className={"square"}/>
        <div className={"square"}/>
        <div className={"square"}/>
        <div className={"square"}/>
        <div className={"square"}/>
        <ReactPageScroller>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ReactPageScroller>

      </header>
    </div>
  );
}

export default App;
