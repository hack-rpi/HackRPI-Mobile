import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FoodPage = () => {
  const handleMealSelection = (meal) => {
    console.log(`Selected ${meal}`);
    // Add your logic for handling the meal selection here
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Meals</Text>
        <View style={styles.bubbleContainer}>
          <TouchableOpacity style={styles.mealButton} onPress={() => handleMealSelection("Breakfast")}>
            <Text style={styles.mealText}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mealButton} onPress={() => handleMealSelection("Lunch")}>
            <Text style={styles.mealText}>Lunch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mealButton} onPress={() => handleMealSelection("Dinner")}>
            <Text style={styles.mealText}>Dinner</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  innerContainer: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  bubbleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mealButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  mealText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FoodPage;
