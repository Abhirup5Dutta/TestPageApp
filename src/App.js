import React from 'react';
import './App.css';
import PageWhole from './PageWhole/PageWhole';
import LeftBar from './LeftBar/LeftBar';

function App() {
  return (
    <div className="app">
      <div className="left">
        < LeftBar />
      </div>
      <div className="right">

        <PageWhole />
      </div>
    </div>
  );
}

export default App;
