import React, { useContext } from 'react';
import { AngleContext, GameplayContext, FlyingObjectContext, StartPositionBallContext, MovingBallsContext } from '../contexts/gameContext';
import { gameHeight } from '../utils/constants';
import { calculateAngle } from '../utils/formulas';
import { signIn } from 'auth0-web';

import createFlyingObjects from '../gameLogic/createFlyingObjects';

import Background from './Background/Background';
import Cannon from './Cannon/Cannon';
import CurrentScore from './CurrentScore';
import FlyingObjects from './FlyingObjects/FlyingObjects';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';
import Leaderboard from './Leaderboard';

import { leaderboard } from '../utils/mockData';

import staticBall from '../gameLogic/staticBall';
import moveBalls from '../gameLogic/moveBalls';
import FlyingBalls from './FlyingBalls';
import checkForCollisions from '../gameLogic/checkForCollision';

const Canvas = (props) => {
    const angleContext = useContext(AngleContext);
    const gameplayContext = useContext(GameplayContext);
    const flyingObjectContext = useContext(FlyingObjectContext);
    const startPositionBallContext = useContext(StartPositionBallContext);
    const movingBallsContext = useContext(MovingBallsContext);



    const onMoveCanvas = (e) => {
       const cannonBaseCenter = {
         x: window.innerWidth / 2,
         y: window.innerHeight - 60,
       };

       const angle = calculateAngle(e.clientX, e.clientY, cannonBaseCenter.x,cannonBaseCenter.y);
       
       angleContext.setAngelContextState(angle, cannonBaseCenter);

       staticBall(startPositionBallContext, angleContext.angle);

       if (gameplayContext.startGame) {
        createFlyingObjects(flyingObjectContext);
       }
    }

    const onClickCanvas = (e) => {
      e.preventDefault();
      moveBalls(movingBallsContext,startPositionBallContext, angleContext);
      checkForCollisions(movingBallsContext, flyingObjectContext);
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
          <FlyingObjects/>
          <FlyingBalls />
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