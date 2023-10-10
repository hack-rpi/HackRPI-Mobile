import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const style = StyleSheet.create({
  circleBackground: {
    fill: 'none',
    stroke: 'rgb(235, 227, 227)',
  },
  circleProgress: {
    fill: 'none',
    stroke: '#610505', // You can use the variable here if needed
  },
});

const CircleProgress = ({ percentage, circleWidth }) => {
  const radius = circleWidth / 2 - 10;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <View>
      <Svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <Circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="10px"
          r={radius}
          style={style.circleBackground}
        />

        <Circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="11px"
          r={radius}
          style={[
            style.circleProgress,
            {
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            },
          ]}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
      </Svg>
    </View>
  );
};

export default CircleProgress;
