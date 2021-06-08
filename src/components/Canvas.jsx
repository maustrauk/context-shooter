import React, { useContext } from 'react';
import { AngleContext, GameplayContext, FlyingObjectContext, StartPositionBallContext } from '../contexts/gameContext';
import { gameHeight } from '../utils/constants';
import { calculateAngle } from '../utils/formulas';
import { signIn } from 'auth0-web';

import createFlyingObjects from '../gameLogic/createFlyingObjects';

import Background from './Background/Background';
import Cannon from './Cannon/Cannon';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObjects/FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';
import Leaderboard from './Leaderboard';

import { leaderboard } from '../utils/mockData';

import staticBall from '../gameLogic/staticBall';

const Canvas = (props) => {
    const angleContext = useContext(AngleContext);
    const gameplayContext = useContext(GameplayContext);
    const flyingObjectContext = useContext(FlyingObjectContext);
    const startPositionBallContext = useContext(StartPositionBallContext);



    const onMoveCanvas = (e) => {
       const mousePos = {
           x: e.clientX,
           y: e.clientY,
       };

       const cannonBaseCenter = {
         x: window.innerWidth / 2,
         y: window.innerHeight - 60,
       };

       const angle = calculateAngle(mousePos.x, mousePos.y, cannonBaseCenter.x,cannonBaseCenter.y);
       
       angleContext.setAngelContextState(angle, cannonBaseCenter);

       staticBall(startPositionBallContext, angleContext.angle);

       if (gameplayContext.startGame) {
        createFlyingObjects(flyingObjectContext);
       }
    }

    const onClickCanvas = (e) => {
      e.preventDefault();
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
        onMouseMove={onMoveCanvas}
        onClick={onClickCanvas}
      >
          <defs>
            <filter id="shadow">
              <feDropShadow dx="1" dy="1" stdDeviation="2" />
            </filter>
          </defs>
          <Background/>
          <Cannon/>
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
              <Leaderboard currentPlayer={leaderboard[6]} authenticate={signIn} leaderboard={leaderboard} />
            </g>
          }
      </svg>
    );
  };


  export default Canvas;