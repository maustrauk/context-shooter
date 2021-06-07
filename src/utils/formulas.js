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

export const calculateNextPosition = (x, y, angle, divisor = 300) => {
    const realAngle = (angle * -1) + 90;
    const stepsX = radiansToDegrees(Math.cos(degreesToRadian(realAngle))) / divisor;
    const stepsY = radiansToDegrees(Math.sin(degreesToRadian(realAngle))) / divisor;
    return {
      x: x +stepsX,
      y: y - stepsY,
    }
  };