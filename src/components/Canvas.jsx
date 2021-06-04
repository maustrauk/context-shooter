import React, { useContext } from 'react';
import { AngleContext, GameplayContext, FlyingObjectContext } from '../contexts/gameContext';
import { gameHeight } from '../utils/constants';
import { calculateAngle } from '../utils/formulas';
import { signIn } from 'auth0-web';

import createFlyingObjects from '../utils/createFlyingObjects';

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
import Login from './Login';

const Canvas = (props) => {
    const angleContext = useContext(AngleContext);
    const gameplayContext = useContext(GameplayContext);
    const flyingObjectContext = useContext(FlyingObjectContext);


    const onMove = (e) => {
       const mousePos = {
           x: e.clientX,
           y: e.clientY,
       };

       const cannonBaseCenter = {
         x: window.innerWidth / 2,
         y: window.innerHeight - 60,
       };

       const angle = calculateAngle(mousePos.x, mousePos.y, cannonBaseCenter.x,cannonBaseCenter.y);
       
       angleContext.setAngelContextState(angle, mousePos, cannonBaseCenter);

       if (gameplayContext.startGame) {
        createFlyingObjects(flyingObjectContext);
       }
    }

    const startButtonHandler = (e) => {
      e.preventDefault();
      gameplayContext.setGameplayContextState(gameplayContext.kills, gameplayContext.lives, true);
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
          <CurrentScore score={gameplayContext.kills} />
          { gameplayContext.startGame ? <g>
            {flyingObjectContext.flyingObjects.map((flyingObject, id) => (
              <FlyingObject key={id} position={flyingObject.position} />
            ))}
          </g> : null
          }
          <Heart position={{x: -300, y: 35}} />
          { ! gameplayContext.startGame && 
            <g>
              <StartGame onClick={startButtonHandler} />
              <Title/>
              <Login authenticate={signIn} />
            </g>
          }
      </svg>
    );
  };


  export default Canvas;