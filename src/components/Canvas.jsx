import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AngleContext } from '../contexts/gameContext';

const Canvas = (props) => {
    const angleContext = useContext(AngleContext);

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
      <svg
        id="shooter-game-canvas"
        viewBox={viewBox}
        onMouseMove={props.trackMouse}
      >
          {console.log(angleContext)}
      </svg>
    );
  };

  Canvas.propTypes = {
      message: PropTypes.string,
  };

  export default Canvas;