import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

export default (props) => {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const isAtTop = useRef(false);

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
    isAtTop.current = true;
  }, []);

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
      onStartShouldSetPanResponder: () => isAtTop.current,
      onMoveShouldSetPanResponder: () => isAtTop.current,
      onPanResponderMove: (event, gestureState) => {
        if (isAtTop.current) {
            // Only update the animated value if `shouldMove` is true
            Animated.event([null, {dy: panY}], {
              useNativeDriver: false,
            })(event, gestureState);
          }
      },
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 1 && isAtTop.current) {
          return handleDismiss();
        }
        return resetPositionAnim.start();
      },
    }),
  ).current;  

  const onScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    isAtTop.current = scrollPosition <= 0;
  };


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
          <ScrollView 
            style={styles.scrollView}
            onScroll={onScroll}
            scrollEventThrottle={16}
          >
            {props.children}
          </ScrollView>
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
    maxHeight: 500,
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
  scrollView: {
    maxHeight: 500, // You might want to adjust this value
  },
});