import React from 'react';
import Svg, { Circle } from 'react-native-svg';

const Timer = ({percentage, circleWidth}) => {
    const radius = 85;
    return (
        <Svg 
            width={circleWidth} 
            height={circleWidth} 
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
            <Circle 
                // constants are temporary
                cx={circleWidth/2} 
                cy={circleWidth/2} 
                strokeWidth="15px"
                r={radius}
            />
        </Svg>
    )
}

export default Timer;
