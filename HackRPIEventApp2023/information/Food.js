import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import FoodObject from "./FoodObject";

// calander object that holds all events and handles which are visable, which are active, and which are upcoming.
const Food = () => {
  return (
    <SafeAreaView style={styles.FoodStyle}>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={true}
        //pagingEnabled={true} // Enable paging
        //snapToInterval={150} // Set the interval to the height of a single rectangle
      >
        <FoodObject
          food_Title="Breakfast"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
        />
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    FoodStyle: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: 16,
  },
});

export default Food;
