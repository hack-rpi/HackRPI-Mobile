import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InfoButtonWrapper from "./Components/InfoButtonWrapper";

const FoodPage = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Meals</Text>
        <View style={styles.bubbleContainer}>
          <InfoButtonWrapper circleColor="red" text="Breakfast" onPress={() => handleMealSelection("Breakfast")} />
          <InfoButtonWrapper circleColor="red" text="Lunch" onPress={() => handleMealSelection("Lunch")} />
          <InfoButtonWrapper circleColor="red" text="Dinner" onPress={() => handleMealSelection("Dinner")} />
        </View>
      </View>
    </View>
  );
};

const handleMealSelection = (meal) => {
  console.log(`Selected ${meal}`);
  // Add your logic for handling the meal selection here
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
});

export default FoodPage;
