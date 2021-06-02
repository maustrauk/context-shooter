import React, {useState, createContext } from 'react';



export const AngleContext = createContext({
    angle: '',
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