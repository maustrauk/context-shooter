export const AngleInitState = {
    angle: 0,
  };
  
export  const StartPositionBallInitState = {
    balls: [
      {
        position: {
          x: 0,
          y: -100,
        },
        shootStatus: false,
      },
    ]
  };

export const MovingBallsInitState = {
  balls: [],
};
  
export const GameplayInitState = {
    kills: 0,
    lives: 0,
    startGame: false,
  };
  
export  const FlyingObjectInitState = {
    flyingObjects: [
        {
            position: {
                x: -150,
                y: -600
            },
            createdAt:  (new Date()).getTime()
        },
        {
            position: {
                x: 150,
                y: -600
            },
            createdAt:  (new Date()).getTime()
        }
    ],
    lastObjectCreatedAt:  (new Date()).getTime(),
  };
  