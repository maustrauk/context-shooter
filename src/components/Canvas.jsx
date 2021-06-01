import React, { useContext } from 'react';
import { AngleContext } from '../contexts/gameContext';

import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {
    const angleContext = useContext(AngleContext);

    const onMove = (e) => {
       const mousePos = {
           x: e.clientX,
           y: e.clientY,
       }

       angleContext.setMousePosition(mousePos);
    }


    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
      <svg
        id="shooter-game-canvas"
        viewBox={viewBox}
        onMouseMove={onMove}
      >
          <Sky />
          <Ground />
          <CannonPipe rotation={angleContext.angle} />
          <CannonBase />
      </svg>
    );
  };


  export default Canvas;