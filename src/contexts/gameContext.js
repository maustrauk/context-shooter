import React, {useState, createContext } from 'react';


export const AngleContext = createContext({
    angle: '',
    setAngle: () => {/*Some function*/},
  });

  export const AngleContextProvider = props => {
    const setAngle = angle => {
      setState({ ...state, angle: angle });
    };
  
  
    const initState = {
        setAngle: setAngle,
      angle: '45',
    };
  
    const [state, setState] = useState(initState);
  
    return (
      <AngleContext.Provider value={state}>{props.children}</AngleContext.Provider>
    );
  };