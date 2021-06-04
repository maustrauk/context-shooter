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
import Leaderboard from './Leaderboard';

const Canvas = (props) => {

  //Mock data
  const leaderboard = [
    { id: 'd4', maxScore: 82, name: 'Ado Kukic', picture: 'https://twitter.com/KukicAdo/profile_image', },
    { id: 'a1', maxScore: 235, name: 'Bruno Krebs', picture: 'https://twitter.com/brunoskrebs/profile_image', },
    { id: 'c3', maxScore: 99, name: 'Diego Poza', picture: 'https://twitter.com/diegopoza/profile_image', },
    { id: 'b2', maxScore: 129, name: 'Jeana Tahnk', picture: 'https://twitter.com/jeanatahnk/profile_image', },
    { id: 'e5', maxScore: 34, name: 'Jenny Obrien', picture: 'https://twitter.com/jenny_obrien/profile_image', },
    { id: 'f6', maxScore: 153, name: 'Kim Maida', picture: 'https://twitter.com/KimMaida/profile_image', },
    { id: 'g7', maxScore: 55, name: 'Luke Oliff', picture: 'https://twitter.com/mroliff/profile_image', },
    { id: 'h8', maxScore: 146, name: 'Sebastian Peyrott', picture: 'https://twitter.com/speyrott/profile_image', },
  ];

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
              <Leaderboard currentPlayer={leaderboard[6]} authenticate={signIn} leaderboard={leaderboard} />
            </g>
          }
      </svg>
    );
  };


  export default Canvas;