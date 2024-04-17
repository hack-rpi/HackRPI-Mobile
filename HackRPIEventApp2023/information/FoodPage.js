import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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

const MealContainer = ({ meal }) => {
  const [expanded, setExpanded] = useState(false);
  const [isBellActive, setIsBellActive] = useState(false);

  const toggleBell = () => {
    setIsBellActive(!isBellActive);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mealHeader}>
        <Text style={[styles.text, { color: "white" }]}>{meal}</Text>
        <Feather
          name={expanded ? "chevron-up" : "chevron-down"}
          size={24}
          color="white"
          onPress={() => setExpanded(!expanded)}
        />
      </View>
      {expanded && (
        <View style={styles.additionalInfoContainer}>
          <Text style={[styles.additionalInfo, { color: "white" }]}>Additional Info</Text>
          <Feather
            name={isBellActive ? "bell" : "bell-off"}
            size={24}
            color={isBellActive ? "red" : "white"}
            onPress={toggleBell}
          />
        </View>
      )}
    </View>
  );
};

const MealSelector = () => {
  return (
    <View style={styles.mealContainer}>
      <HeaderContainer title="Meals" />
      <EmptyContainer />
      <MealContainer meal="Breakfast" />
      <MealContainer meal="Lunch" />
      <MealContainer meal="Dinner" />
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
    color: "white",
  },
  emptyContainer: {
    height: 20, // Adjust height as needed
  },
  container: {
    width: 300, // Adjust width as needed
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  mealHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  additionalInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  additionalInfo: {
    fontSize: 16,
  },
});

export default MealSelector;
