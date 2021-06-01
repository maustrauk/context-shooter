import React, { useContext } from 'react';
import { AngleContext } from '../contexts/gameContext';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {
    const angleContext = useContext(AngleContext);


    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
      <svg
        id="shooter-game-canvas"
        viewBox={viewBox}
        onMouseMove={props.trackMouse}
      >
          <Sky />
          <Ground />
          <CannonPipe rotation={angleContext.angle} />
          <CannonBase />
      </svg>
    );
  };


  export default Canvas;