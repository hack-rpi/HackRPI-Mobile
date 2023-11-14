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
      });
    } else {
      setSelectedCategory(null);
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

  const theme = {
    primaryColor: 'blue',
    secondaryColor: 'white',
    textColor: 'black',
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
    </View>
  );
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
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  
});

export default HackathonScreen;
