import React, { Component } from 'react';
import Canvas from './components/Canvas';
import * as Auth0 from 'auth0-web';

Auth0.configure({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  responseType: 'token id_token',
  scope: 'openid profile manage:points',
});

class App extends Component  {
  
  componentDidMount() {

    Auth0.handleAuthCallback();

    Auth0.subscribe((auth) => {
      console.log("Logined - ",auth);
    });

    window.onresize = () => {
      const cnv = document.getElementById('shooter-game-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();

    
  }

  render() {
    return (
      <div>
        <Canvas />
      </div>);
  }

}

export default App;
