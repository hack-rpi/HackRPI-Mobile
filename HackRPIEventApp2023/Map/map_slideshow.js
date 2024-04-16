import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom'; // Import the zoom library

// Array of image references
const images = [
  require('./1.jpg'),
  require('./2.jpg'),
  require('./3.jpg'),
];

const ImageSlideshow = () => {
  // State variables for current image index and modal visibility
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  
  // Ref for FlatList component
  const flatListRef = useRef(null);

  // Callback function to handle scroll end and update the current image index
  const handleMomentumScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  // Get the screen width
  const screenWidth = Dimensions.get('window').width;

  // Render the component
  return (
    <View style={styles.container}>
      {/* FlatList to display images horizontally */}
      <FlatList
        ref={flatListRef}
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
              <Image source={item} style={styles.image} />
            </View>
          </TouchableOpacity>
        )}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
      
      {/* Preview indicators for images */}
      <View style={styles.previewContainer}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              flatListRef.current.scrollToIndex({ animated: true, index });
              setCurrentIndex(index);
            }}
          >
            <Image
              source={image}
              style={[
                styles.preview,
                index === currentIndex ? styles.activePreview : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>



      {/* Modal for displaying enlarged image */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity
            style={styles.exitButton}
            activeOpacity={1}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Image style = {styles.exitButtonImage} source = {require('./x.svg')}/>
          </TouchableOpacity>
          
          {/* Use ImageZoom to enable zooming and rotating */}
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={Dimensions.get('window').height}
          >
            <Image source={images[currentIndex]} style={styles.modalImage} />
          </ImageZoom>
          
        
      </Modal>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  // Container style
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  // Style for individual image container
  imageContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style for the images
  image: {
    width: 300,
    height: 300,
  },
  // Style for the preview indicators container
  previewContainer: {
    flexDirection: 'row',
    marginTop: 20,
    bottom: 10,
  },
  // Style for individual preview indicator
  preview: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'gray',
    margin: 5,
  },
  // Style for active preview indicator
  activePreview: {
    backgroundColor: 'red', // Change to your desired active preview color
    borderWidth: 4, // Border width for the active preview indicator
    borderColor: 'red', // Border color for the active preview indicator
  },
  // Style for the modal container
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  // Style for the modal image
  modalImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  exitButton: {
    position: 'absolute',
    top: 40,
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

// Export the component
export default ImageSlideshow;