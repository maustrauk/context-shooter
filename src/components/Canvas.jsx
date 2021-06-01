import React from 'react';
import PropTypes from 'prop-types';

const Canvas = (props) => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
      <svg
        id="shooter-game-canvas"
        viewBox={viewBox}
        onMouseMove={props.trackMouse}
      >
      </svg>
    );
  };

  Canvas.propTypes = {
      message: PropTypes.string,
  };

  export default Canvas;