export const skyAndGroundWidth = 5000;

export const gameWidth = 800;

export const gameHeight = 1200;


//flyingObjects

export const initialCreatedAt = (new Date()).getTime();

export const initialFlyingObjects = [
    {
        position: {
            x: -150,
            y: -600
        },
        createdAt: initialCreatedAt
    },
    {
        position: {
            x: 150,
            y: -600
        },
        createdAt: initialCreatedAt
    }
];

export const createInterval = 1000;

export const maxFlyingObjects = 4;

export const flyingObjectsStarterYAxis = -500;

export const flyingObjectsStarterPositions = [
  -300,
  -150,
  150,
  300,
];