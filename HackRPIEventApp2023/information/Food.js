import React from "react";
import { SafeAreaView, ScrollView, StyleSheet,Text,View } from "react-native";
import FoodObject from "./FoodObject";


const Food = () => {
  return (
    <SafeAreaView style={styles.FoodStyle}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Info</Text>
            <Text style={styles.subheader}>Maps</Text>
        </View>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={true}
      >
        <FoodObject
          food_Title="Breakfast"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          imageSource = {require('./breakfast.jpg')}
           
       />
        <FoodObject
          food_Title="Lunch"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          imageSource = {require('./lunch.webp')}
          
        />
        <FoodObject
          food_Title="Dinner"
          Time="Time Unknown"
          Location="Location Unknown"
          Description="This is not important at all."
          imageSource = {require('./dinner.jpeg')}
          
        />
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
    FoodStyle: {
        flex: 1,
    },
    headerContainer: {
        alignItems: 'left',
        marginBottom: 20, // Adjust as needed
        marginTop: 10,
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        
        color:'white'

    },
    subheader: {
        fontSize: 18,
        color:'white'
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
