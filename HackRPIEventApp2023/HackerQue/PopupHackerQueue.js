//design the pop queue element+ hacker queue button shouldbe linked like that ---> mentor queue
//create a pop--> put a button on info screen
//library online + make sure to send it to Raven.......

// Import necessary modules
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";

export default function PopupHackerQueue() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Function to handle swipe up gesture
  const handleSwipeUp = () => {
    setMenuVisible(true);
  };

  // Function to close the menu
  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  return (
    <View style={styles.container} onTouchStart={handleSwipeUp}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={handleCloseMenu}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Menu Content Here</Text>
            <TouchableOpacity onPress={handleCloseMenu}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    alignItems: "center",
  },
});
