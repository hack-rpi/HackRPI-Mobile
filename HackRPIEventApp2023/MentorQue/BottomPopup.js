import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native';

export default (props) => {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const handleDismiss = () => closeAnim.start(() => props.onDismiss());

  useEffect(() => {
    resetPositionAnim.start();
  }, [resetPositionAnim]);

  useEffect(() => {
    if (props.visible) {
      panY.setValue(screenHeight); // Ensure the animation starts from the bottom
      resetPositionAnim.start();
    }
  }, [props.visible, resetPositionAnim, screenHeight, panY]);
  

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, {dy: panY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return handleDismiss();
        }
        return resetPositionAnim.start();
      },
    }),
  ).current;  


  return (
    <Modal
      animationType="fade"
      visible={props.visible}
      transparent
      onRequestClose={handleDismiss}>
      <View style={styles.overlay}>
        <Animated.View
          style={{
            ...styles.container,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          <View style={styles.sliderIndicatorRow}>
            <View style={styles.sliderIndicator} />
          </View>
          {props.children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#25303C',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 500,
  },
  sliderIndicatorRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderIndicator: {
    backgroundColor: '#191919',
    height: 4,
    width: 45,
  },
});