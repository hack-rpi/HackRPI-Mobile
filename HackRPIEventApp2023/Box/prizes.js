import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Animated } from 'react-native';

const data = [
  { category: 'Best Mobile App', prize: '$1000', details: 'Details about the Best Mobile App category.' },
  { category: 'Best Web App', prize: '$800', details: 'Details about the Best Web App category.' },
  { category: 'Best UI/UX Design', prize: '$500', details: 'Details about the Best UI/UX Design category.' },
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={styles.buttonText}>View Categories and Prizes</Text>
      </TouchableOpacity>
      <Modal transparent visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedCategory ? (
            <Animated.View style={[styles.modalContent, { opacity: modalOpacity }]}>
              <Text style={styles.selectedCategory}>{selectedCategory}</Text>
              <Text style={styles.details}>{data.find((item) => item.category === selectedCategory).details}</Text>
            </Animated.View>
          ) : (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => selectCategory(item.category)}
                    style={styles.modalItem}
                  >
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.prize}>{item.prize}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.category}
                contentContainerStyle={styles.flatListContainer}
              />
          )}
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
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
});

export default HackathonScreen;
