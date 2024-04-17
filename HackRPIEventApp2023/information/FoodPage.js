import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FoodMenu from "./FoodMenu"; // Import the FoodMenu component
import { ScrollView } from "react-native-gesture-handler";
import Bubble from "./Bubble"; // Import the Bubble component

const FoodPage = ({ onClose }) => {
  // Define the menu items
  const menuItems = [
    { name: "Breakfast", image: require("./assets/breakfast.png"), circleColor: "#EF3B41" },
    { name: "Lunch", image: require("./assets/lunch.png"), circleColor: "#F8A13A" },
    { name: "Dinner", image: require("./assets/dinner.png"), circleColor: "#05A55C" },
  ];

  return (
    <View style={styles.container}>
      {/* Close button */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <FontAwesomeIcon icon={faTimes} size={24} color="white" />
      </TouchableOpacity>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Food</Text>
      </View>
      {/* Menu items */}
      <ScrollView contentContainerStyle={styles.menuContainer} horizontal={true}>
        {menuItems.map((item, index) => (
          <View key={index}>
            <Bubble circleColor={item.circleColor}>
              <FoodMenu name={item.name} image={item.image} />
            </Bubble>
          </View>
        ))}
      </ScrollView>
      {/* Bottom line */}
      <View style={styles.bottomLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  headerText: {
    fontSize: 24,
    color: "white",
  },
  menuContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  bottomLine: {
    height: 2,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default FoodPage;
