import React from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

const App = (props) => {
  return (
    <Canvas />
  );
}


App.propTypes = {
  message: PropTypes.string,
};

export default App;
