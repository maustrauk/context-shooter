import React, { useState, createContext } from 'react';

import { initialFlyingObjects, initialCreatedAt } from '../utils/constants';

//Initials states

const AngleInitState = {
  angle: 0,
  cannonBaseCenter: {
    x: 1200,
    y: 800,
  },
};

const BallInitState = {
  balls: [
    {
      position: {
        x: 0,
        y: -100,
      },
      id: 0,
    },
  ]
};

const GameplayInitState = {
  kills: 0,
  lives: 0,
  startGame: false,
};

const FlyingObjectInitState = {
  flyingObjects: initialFlyingObjects,
  lastObjectCreatedAt: initialCreatedAt,
};



//GameplayContext

export const GameplayContext = createContext();

export const GameplayContextProvider = props => {

  const [state, setState] = useState(GameplayInitState);

  const setGameplayContextState = (kills, lives, startGame) => {
      setState({ ...state, kills: kills, lives: lives, startGame: startGame});
    };


  return (
    <GameplayContext.Provider value={{...state, setGameplayContextState}}>{props.children}</GameplayContext.Provider>
  );
};

//FlyingObjectContext

export const FlyingObjectContext = createContext();

export const FlyingObjectContextProvider = props => {

  const [state, setState] = useState(FlyingObjectInitState);

  const setFlyingObjectContext = (flyingObjects, lastObjectCreatedAt) => {
    setState({ ...state, flyingObjects: flyingObjects, lastObjectCreatedAt: lastObjectCreatedAt});
  };

  return (
    <FlyingObjectContext.Provider value={{...state, setFlyingObjectContext}}>{props.children}</FlyingObjectContext.Provider>
  );
};

//AngleContext

export const AngleContext = createContext();

export const AngleContextProvider = props => {

  const [state, setState] = useState(AngleInitState);

    const setAngelContextState = (angle, cannonBaseCenter) => {
        setState({ ...state, angle: angle, cannonBaseCenter: cannonBaseCenter});
      };

    return (
      <AngleContext.Provider value={{...state, setAngelContextState}}>{props.children}</AngleContext.Provider>
    );
  };

//BallContext

export const BallContext = createContext();

export const BallContextProvider = props => {

  const [state, setState] = useState(BallInitState);

    const setBallContextState = (balls) => {
        setState({...state, balls: balls});
      };

    return (
      <BallContext.Provider value={{...state, setBallContextState}}>{props.children}</BallContext.Provider>
    );
  };
