import React, { Component } from 'react';
import Canvas from './components/Canvas';


class App extends Component  {
  
  componentDidMount() {
    window.onresize = () => {
      const cnv = document.getElementById('shooter-game-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  render() {
    return (
      <div>
        <Canvas />
      </div>);
  }

}

export default App;
