import { bool, number } from 'prop-types';
import React, { useState, createContext } from 'react';

import { initialFlyingObjects, initialCreatedAt } from '../utils/constants';

//GameplayContext

export const GameplayContext = createContext({
  startGame: bool,
  kills: number,
  lives: number,
  setStartGame: () => {/*Some function*/},
  setKills: () => {/*Some function*/},
  setLives: () => {/*Some function*/},
});

export const GameplayContextProvider = props => {

  const setStartGame = (startGame) => {
      setState({ ...state, startGame: startGame});
    };

  const setKills = (kills) => {
    setState({ ...state, kills: kills});
  };

  const setLives = (lives) => {
    setState({ ...state, lives: lives});
  };

  const initState = {
    setStartGame: setStartGame,
    setKills: setKills,
    setLives: setLives,
    kills: 0,
    lives: 0,
    startGame: false,
  };

  const [state, setState] = useState(initState);

  return (
    <GameplayContext.Provider value={state}>{props.children}</GameplayContext.Provider>
  );
};

//FlyingObjectContext

export const FlyingObjectContext = createContext({
  flyingObjects: [],
  lastObjectCreatedAt: number,
  setFlyingObjects: () => {/*Some function*/},
  setLastObjectCreatedAt: () => {/*Some function*/},
});

export const FlyingObjectContextProvider = props => {

  const setFlyingObjects = (flyingObjects) => {
    setState({ ...state, flyingObjects: flyingObjects});
  };

  const setLastObjectCreatedAt = (lastObjectCreatedAt) => {
    setState({ ...state, lastObjectCreatedAt: lastObjectCreatedAt});
  };

  const initState = {
    setFlyingObjects: setFlyingObjects,
    setLastObjectCreatedAt: setLastObjectCreatedAt,
    flyingObjects: initialFlyingObjects,
    lastObjectCreatedAt: initialCreatedAt,
  };

  const [state, setState] = useState(initState);

  return (
    <FlyingObjectContext.Provider value={state}>{props.children}</FlyingObjectContext.Provider>
  );
};

//AngleContext

export const AngleContext = createContext({
    angle: number,
    mousePosition: {},
    cannonBaseCenter: {},
    setMousePosition: () => {/*Some function*/},
    setCannonBaseCenter: () => {/*Some function*/},
    setAngle: () => {/*Some function*/},
  });

  export const AngleContextProvider = props => {

    const setMousePosition = (mousePosition) => {
        setState({ ...state, mousePosition: mousePosition});
      };

    const setCannonBaseCenter = cannonBaseCenter => {
      setState({ ...state, cannonBaseCenter: cannonBaseCenter});
    };

    const setAngle = angle => {
      setState({ ...state, angle: angle});
    };
  
  
    const initState = {
        setMousePosition: setMousePosition,
        setCannonBaseCenter: setCannonBaseCenter,
        setAngle: setAngle,
        angle: 0,
        mousePosition: {
            x: 0,
            y: 0,
        },
        cannonBaseCenter: {
          x: 1200,
          y: 800,
        },
    };
  
    const [state, setState] = useState(initState);
  
    return (
      <AngleContext.Provider value={state}>{props.children}</AngleContext.Provider>
    );
  };