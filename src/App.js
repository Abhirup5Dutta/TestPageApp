import React from 'react';
import './App.css';
import LeftBar from './LeftBar/LeftBar';
import PageBodyLeft from './PageBodyLeft/PageBodyLeft';
import PageBodyRight from './PageBodyRight/PageBodyRight';

function App() {
  return (
    <div className="app">
      <div className="left">
        < LeftBar />
      </div>
      <div className="right">
        <PageBodyLeft />
      </div>
      <div className="rightMost">
        <PageBodyRight />
      </div>
    </div>
  );
}

export default App;
