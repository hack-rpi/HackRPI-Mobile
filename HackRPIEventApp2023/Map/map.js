import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ImageSlideshow from "./map_slideshow";

const Food = () => {
  return (
    <SafeAreaView style={styles.FoodStyle}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Maps</Text>
      </View> 
      <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={true}>
        <ImageSlideshow />
        <View style={styles.container}>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  FoodStyle: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40, // Adjust as needed
    marginTop: 10,
    color: "yellow"
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  subheader: {
    fontSize: 18,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  foodTitle: {
    fontSize: 24, // Adjust as needed
    fontWeight: "bold",
    color: "black", // Change to the desired color
    marginBottom: 10, // Adjust spacing between food objects
  },
  foodStore: {
    fontStyle: "italic", // Set font style to italic
  },
  marginTop: 20,
  marginBottom: 20,
  backgroundColor: "transparent",
  flex: 1,
  justifyContent: "start",
  alignItems: "center",
  padding: 16,
});

export default Food;
