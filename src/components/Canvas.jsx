import React, { useContext } from 'react';
import { AngleContext } from '../contexts/gameContext';
import { gameHeight } from '../utils/constants';

import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

const Canvas = (props) => {
    const angleContext = useContext(AngleContext);

    const onMove = (e) => {
       const mousePos = {
           x: e.clientX,
           y: e.clientY,
       }

       angleContext.setMousePosition(mousePos);
    }

    


    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
    return (
      <svg
        id="shooter-game-canvas"
        viewBox={viewBox}
        onMouseMove={onMove}
      >
          <defs>
            <filter id="shadow">
              <feDropShadow dx="1" dy="1" stdDeviation="2" />
            </filter>
          </defs>
          <Sky />
          <Ground />
          <CannonBall position={{x: 0, y: -100}}/>
          <CannonPipe rotation={angleContext.angle} />
          <CannonBase />
          <CurrentScore score={15} />
          <FlyingObject position={{x: -150, y: -300}}/>
          <FlyingObject position={{x: 150, y: -300}}/>
          <Heart position={{x: -300, y: 35}} />
          <StartGame onClick={() => console.log('Start')} />
          <Title/>
      </svg>
    );
  };


  export default Canvas;