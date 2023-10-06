import React from 'react';

const CircleProgress = ({percentage, circleWidth}) => {
    const radius = circleWidth / 2 - 10;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;
    return (
        <div>
            <svg
                width={circleWidth}
                height={circleWidth}
                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth="19px"
                    r={radius}
                    className="circle-background"
                />

                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth="20px"
                    r={radius}
                    className="circle-progress"
                    style={{
                        strokeDasharray: dashArray, 
                        strokeDashoffset: dashOffset,
                    }}
                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                />                
            </svg>
        </div>
    );
};

export default CircleProgress;