import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Modal,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

const images = [
  require('./1.jpg'),
  require('./2.jpg'),
  require('./3.jpg'),
];

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [scale, setScale] = useState(1);

  const handlePinch = (gestureState) => {
    const newScale = gestureState.scale * scale;
    setScale(newScale < 1 ? 1 : newScale); // Ensure minimum scale is 1
  };

  const resetScale = () => {
    setScale(1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setCurrentIndex(index);
              setModalVisible(true);
            }}
          >
            <View style={styles.imageContainer}>
              <Image source={item} style={[styles.image, { transform: [{ scale }] }]} />
            </View>
          </TouchableOpacity>
        )}
        onMomentumScrollEnd={(event) => {
          const contentOffset = event.nativeEvent.contentOffset.x;
          const index = Math.floor(contentOffset / Dimensions.get('window').width);
          setCurrentIndex(index);
          resetScale();
        }}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.exitButton}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.exitButtonText}>X</Text>
          </TouchableOpacity>
          <ScrollView
            style={styles.scrollView}
            pinchGestureEnabled
            maximumZoomScale={3} // Set the maximum zoom scale as per your requirement
          >
            <Image source={images[currentIndex]} style={[styles.modalImage, { transform: [{ scale }] }]} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
  },
  modalImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  exitButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ImageSlideshow;
