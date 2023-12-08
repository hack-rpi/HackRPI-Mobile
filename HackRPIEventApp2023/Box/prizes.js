import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Animated, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import useModalAnimation from './hooks/useModalAnimation'; // Custom hook for modal animation

// Smaller Component: CategoryItem
const CategoryItem = ({ item, onSelect }) => (
  <TouchableOpacity onPress={() => onSelect(item.category)} style={styles.modalItem}>
    <Text style={styles.category}>{item.category}</Text>
    <Text style={styles.prize}>{item.prize}</Text>
  </TouchableOpacity>
);

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

// Custom Hook for Modal Animation
const useModalAnimation = () => {
  const modalOpacity = useState(new Animated.Value(0))[0];

  const toggleModal = (isVisible) => {
    Animated.timing(modalOpacity, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return [modalOpacity, toggleModal];
};

// Main Component: HackathonScreen
const HackathonScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalOpacity, toggleModal] = useModalAnimation();

  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
    toggleModal(!isModalVisible);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    handleModalToggle();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleModalToggle} style={styles.button}>
        <Text style={styles.buttonText}>View Categories and Prizes</Text>
      </TouchableOpacity>
      <Modal transparent visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { opacity: modalOpacity }]}>
            <FlatList
              data={data}
              renderItem={({ item }) => <CategoryItem item={item} onSelect={selectCategory} />}
              keyExtractor={(item) => item.category}
            />
          </Animated.View>
        </View>
      </Modal>
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
