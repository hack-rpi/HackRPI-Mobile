import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

const data = [
  {
    category: 'Best Mobile App',
    prize: '$1000',
    details: 'Details about the Best Mobile App category.',
    requirements: 'Add your specific requirements here',
  },
  {
    category: 'Best Web App',
    prize: '$800',
    details: 'Details about the Best Web App category.',
    requirements: 'Add your specific requirements here',
  },
  {
    category: 'Best UI/UX Design',
    prize: '$500',
    details: 'Details about the Best UI/UX Design category.',
    requirements: 'Add your specific requirements here',
  },
  // Add more categories and prizes as needed
];

const HackathonScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPrizeIdeaFormOpen, setPrizeIdeaFormOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // New state variable
  const modalOpacity = new Animated.Value(0);

  const toggleModal = () => {
    if (isModalVisible) {
      Animated.timing(modalOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setModalVisible(false);
        setSelectedCategory(null);
        setSelectedImageIndex(0);
      });
    } else {
      setSelectedCategory(null);
      setSelectedImageIndex(0);
      Animated.timing(modalOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setModalVisible(true));
    }
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const togglePrizeIdeaForm = () => {
    setPrizeIdeaFormOpen(!isPrizeIdeaFormOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={[styles.button, { backgroundColor: theme.primaryColor }]}>
        <Text style={[styles.buttonText, { color: theme.textColor }]}>View Categories and Prizes</Text>
      </TouchableOpacity>
      <Modal transparent visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedCategory ? (
            <Animated.View style={[styles.modalContent, { opacity: modalOpacity, flex: 1 }]}>
              {/* Inner modal content */}
              <Swiper
                loop={false}
                index={selectedImageIndex}
                onIndexChanged={(index) => setSelectedImageIndex(index)}
              >
                {data
                  .filter((item) => item.category === selectedCategory)
                  .map((item, index) => (
                    <View key={index} style={styles.imageContainer}>
                      <Image source={require('./kuromi.jpg')} style={styles.categoryImage} />
                      {/* You can replace the above line with your actual image source */}
                    </View>
                  ))}
              </Swiper>
              <Text style={[styles.selectedCategory, { textAlign: 'center', color: 'orange' }]}>
                {selectedCategory}
              </Text>
              <Text style={[styles.details, { textAlign: 'center' }]}>
                {data.find((item) => item.category === selectedCategory).details}
              </Text>
              <Text style={[styles.details, { textAlign: 'center', marginTop: 10 }]}>
                Prize: {data.find((item) => item.category === selectedCategory).prize}
              </Text>
              <Text style={[styles.details, { textAlign: 'center', marginTop: 10 }]}>
                Requirements: {data.find((item) => item.category === selectedCategory).requirements}
              </Text>
              <TouchableOpacity
                onPress={togglePrizeIdeaForm}
                style={[styles.submitButton, { backgroundColor: theme.primaryColor }]}
              >
                <Text style={[styles.submitButtonText, { color: theme.textColor }]}>Submit Prize Idea</Text>
              </TouchableOpacity>
            </Animated.View>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectCategory(item.category)} style={styles.modalItem}>
                  <Image source={require('./kuromi.jpg')} style={styles.categoryIcon} />
                  <View>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.prize}>{item.prize}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.category}
              contentContainerStyle={styles.flatListContainer}
            />
          )}
          <TouchableOpacity onPress={toggleModal} style={[styles.closeButton, { backgroundColor: theme.primaryColor }]}>
            <Text style={[styles.closeButtonText, { color: theme.textColor }]}>Close &#10006;</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {isPrizeIdeaFormOpen ? (
        <PrizeIdeaForm onClose={togglePrizeIdeaForm} />
      ) : null}
    </View>
  );
};

const PrizeIdeaForm = ({ onClose }) => {
  const [idea, setIdea] = useState('');

  const submitIdea = () => {
    // Here, you can implement the logic to handle the submission of the prize idea
    // For example, you might want to send the idea to a server or store it locally.

    // For now, let's just log the idea to the console.
    console.log('Submitted Prize Idea:', idea);

    // Clear the input field
    setIdea('');

    // Close the form
    onClose();
  };

  return (
    <View style={styles.submissionFormContainer}>
      <Text style={styles.formTitle}>Submit Your Prize Idea</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your prize idea"
        value={idea}
        onChangeText={(text) => setIdea(text)}
        multiline
      />
      <TouchableOpacity onPress={submitIdea} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>&#10006; Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const theme = {
  primaryColor: 'blue',
  secondaryColor: 'white',
  textColor: 'black',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  categoryIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
  },
  category: {
    fontSize: 16,
  },
  prize: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 50,
  },  
  innerModalContent: {
    alignItems: 'center',
  },
  selectedCategory: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  innerModalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  submissionFormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  submitButton: {
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
  },
  submitButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HackathonScreen;
