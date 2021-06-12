import { keyframes, css } from 'styled-components';
import { gameHeight } from './constants';


export const flyingObjectsAnimation = (props) => {

    const moveVertically = keyframes`
     0% {
            transform: translateY(0);
        }
     100% {
            transform: translateY(${gameHeight}px);
        }
    `;

    return css`animation: ${moveVertically} 4s linear`;
};

export const flyingBallsAnimation = (props) => {


    const moveBall = keyframes`
     0% {
            transform: translate(0,0);
        }
     100% {
            transform: translate(${props.x}px, ${props.y}px);
        }
    `;

    return css`animation: ${moveBall} 4s linear`;
}