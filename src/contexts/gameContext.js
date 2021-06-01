import React, {useState, createContext } from 'react';
import { calculateAngle } from '../utils/formulas';

export const cannonPipePos = {
  x: window.innerWidth / 2,
  y: window.innerHeight,
}


export const AngleContext = createContext({
    angle: '',
    mousePosition: {},
    setMousePosition: () => {/*Some function*/},
  });

  export const AngleContextProvider = props => {

    const setMousePosition = mousePosition => {
        const tempAngel = calculateAngle(mousePosition.x, mousePosition.y, cannonPipePos.x, cannonPipePos.y)
        setState({ ...state, mousePosition: mousePosition, angle: tempAngel});
      };
  
  
    const initState = {
        setMousePosition: setMousePosition,
        angle: 0,
        mousePosition: {
            x: 0,
            y: 0,
        }
    };
  
    const [state, setState] = useState(initState);
  
    return (
      <AngleContext.Provider value={state}>{props.children}</AngleContext.Provider>
    );
  };