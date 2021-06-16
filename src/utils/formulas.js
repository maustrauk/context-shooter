export const pathFromBezierCurve = (cubicBezierCurve) => {
    const {
      initialAxis, initialControlPoint, endingControlPoint, endingAxis,
    } = cubicBezierCurve;
    return `
      M${initialAxis.x} ${initialAxis.y}
      c ${initialControlPoint.x} ${initialControlPoint.y}
      ${endingControlPoint.x} ${endingControlPoint.y}
      ${endingAxis.x} ${endingAxis.y}
    `;
  };

export const radiansToDegrees = radians => ((radians * 180) / Math.PI);

export const calculateAngle = (x1, y1, x2, y2) => {
  
    const dividend = y2 - y1;
    const divisor = x2 - x1;
    const quotient = dividend / divisor;
    const result = radiansToDegrees( Math.atan(quotient)) - 90 ;
    if (x2 >= x1) {
      return result;
    } else {
      return result + 180;
    }
  };

export const degreesToRadian = degrees => ((degrees * Math.PI) / 180);

export const calculateStartPosition = (angle, hight) => {
    const ajustAngle = angle - 270;
    const x = - hight * Math.cos(degreesToRadian(ajustAngle));
    const y = - hight * Math.sin(degreesToRadian(ajustAngle));

    return {
      x: x,
      y: y,
    }
  };

export const ABCDVector = (A, B, C, D) => {
  return { A: A, B: B, C: C, D: D,
    AB: {
      x: B.x - A.x,
      y: B.y - A.y,
    },
    AC: {
      x: C.x - A.x,
      y: C.y - A.y,
    },
    AD: {
      x: D.x - A.x,
      y: D.y - A.y,
    },
    CD: {
      x: D.x - C.x,
      y: D.y - C.y,
    },
    CB: {
      x: B.x - C.x,
      y: B.y - C.y,
    },
    CA: {
      x: A.x - C.x,
      y: A.y - C.y,
    },
  }
}


export const traceCross = (targetStartPos, targetEndPos, ballStartPos, ballEndPos) => {
  const { C, D, AB, AC, AD, CD, CB, CA } =ABCDVector(targetStartPos, targetEndPos, ballStartPos, ballEndPos);

  const z1 = AB.x * AC.y - AB.y * AC.x;
  const z2 = AB.x * AD.y - AB.y * AD.x;
  const z3 = CD.x * CB.y - CD.y * CB.x;
  const z4 = CD.x * CA.y - CD.y * CA.x;
  
  if (Math.sign(z1) === Math.sign(z2)) {
    return {};
  }

  if (Math.sign(z3) === Math.sign(z4)) {
    return {};
  }

  return {
    x: C.x + (D.x - C.x) * Math.abs(z1) / Math.abs(z2 - z1),
    y: C.y + (D.y - C.y) * Math.abs(z1) / Math.abs(z2 - z1),
  }
};

export const timeCross = (crossObject, targetTime, ballTime) => {
  const crossPoint = crossObject.crossPoint;
  const targetStartPos = crossObject.targetPos.targetStartPos;
  const ballStartPos = crossObject.ballPos.ballStartPos;
  const targetEndPos = crossObject.targetPos.targetEndPos;
  const ballEndPos = crossObject.ballPos.ballEndPos;

  const collisionVector = ABCDVector(targetStartPos, crossPoint, ballStartPos, crossPoint);
  const speedVector = ABCDVector(targetStartPos, targetEndPos, ballStartPos, ballEndPos);

  const targetTrack = Math.sqrt(collisionVector.AB.x * collisionVector.AB.x + collisionVector.AB.y * collisionVector.AB.y);
  const ballTrack = Math.sqrt(collisionVector.CB.x * collisionVector.CB.x + collisionVector.CB.y * collisionVector.CB.y);

  const targetSpeed = Math.sqrt(speedVector.AB.x * speedVector.AB.x + speedVector.AB.y * speedVector.AB.y) / targetTime;
  const ballSpeed = Math.sqrt(speedVector.CD.x * collisionVector.CD.x + collisionVector.CD.y * collisionVector.CD.y) / ballTime;

  const targetCollision = targetTrack / targetSpeed;
  const ballCollision = ballTrack / ballSpeed;

  const err = 500;

  if (ballCollision >= (targetCollision - err) && ballCollision <= (targetCollision + err)) {
    return ballCollision;
  } else {
    return -1;
  }
};