import React, { useState, createContext } from 'react';

import { GameplayInitState, FlyingObjectInitState, AngleInitState, StartPositionBallInitState} from './initalStates';


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

    const setAngelContextState = (angle) => {
        setState({ ...state, angle: angle});
      };

    return (
      <AngleContext.Provider value={{...state, setAngelContextState}}>{props.children}</AngleContext.Provider>
    );
  };

//StartPositionBallContext

export const StartPositionBallContext = createContext();

export const StartPositionBallContextProvider = props => {

  const [state, setState] = useState(StartPositionBallInitState);

    const setStartPositionBallContextState = (balls) => {
        setState({...state, balls: balls});
      };

    return (
      <StartPositionBallContext.Provider value={{...state, setStartPositionBallContextState}}>{props.children}</StartPositionBallContext.Provider>
    );
  };
