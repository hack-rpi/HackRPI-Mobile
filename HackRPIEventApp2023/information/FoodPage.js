import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const HeaderContainer = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const EmptyContainer = () => {
  return <View style={styles.emptyContainer} />;
};

const MealContainer = ({ meal, onPress, isActive }) => {
  return (
    <TouchableOpacity style={[styles.container, isActive && styles.active]} onPress={onPress}>
      <Text style={[styles.text, isActive && styles.whiteText]}>{meal}</Text>
      <Feather name={isActive ? "bell-off" : "bell"} size={30} color={isActive ? "red" : "black"} />
    </TouchableOpacity>
  );
};

const MealSelector = () => {
  const handleMealSelection = (meal) => {
    console.log(`Selected ${meal}`);
    // Add your logic for handling the meal selection here
  };

  return (
    <View style={styles.mealContainer}>
      <HeaderContainer title="Meals" />
      <EmptyContainer />
      <MealContainer meal="Breakfast" onPress={() => handleMealSelection("Breakfast")} />
      <MealContainer meal="Lunch" onPress={() => handleMealSelection("Lunch")} />
      <MealContainer meal="Dinner" onPress={() => handleMealSelection("Dinner")} />
    </View>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 10,
    marginBottom: 0,
  },
  headerContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyContainer: {
    height: 20, // Adjust height as needed
  },
  container: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  whiteText: {
    color: "white", // Change text color to white
  },
  active: {
    backgroundColor: "lightgray", // Change to your desired active background color
  },
});

export default MealSelector;
