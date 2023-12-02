import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FoodObject from "./FoodObject";
import ImageSlideshow from "./map/image_slideshow";

const Food = () => {
  return (
    <SafeAreaView style={styles.FoodStyle}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Maps</Text>
      </View>
      <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={true}>
        <ImageSlideshow />

        <Text style={styles.header}>Info</Text>
        <View style={styles.container}>
          <FoodObject
            food_Title="Breakfast"
            Store="Bagels, Donuts, Coffee"
            Time="Time: TBA"
            Location="Location"
            Description=""
            imageSource={require("./bagels.png")}
          />
          <FoodObject
            food_Title="Lunch 1"
            Store="Big Apple Pizzeria"
            Time="Time: TBA"
            Location="Location"
            Description=""
            imageSource={require("./big_apple.jpg")}
          />
          <FoodObject
            food_Title="Lunch 2"
            Store="DeFazio's Pizzeria"
            Time="Time: TBA"
            Location="Location Unknown"
            Description=""
            imageSource={require("./DeFazio_pizza.jpg")}
          />

          <FoodObject
            food_Title="Dinner"
            Store="Di Bella's Old Fashioned Subs"
            Time="Time: TBA"
            Location="Location Unknown"
            Description=""
            imageSource={require("./DiBella_Subs.jpg")}
          />

          <FoodObject
            food_Title="Midnight Snack"
            Store="Tai Chi Bubble Tea"
            Time="Time: TBA"
            Location="Location Unknown"
            Description=""
            imageSource={require("./Bubble_Tea.jpg")}
          />
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
    alignItems: "left",
    marginBottom: 20, // Adjust as needed
    marginTop: 10,
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
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

  marginTop: 20,
  marginBottom: 20,
  backgroundColor: "transparent",
  flex: 1,
  justifyContent: "start",
  alignItems: "center",
  padding: 16,
});

export default Food;
