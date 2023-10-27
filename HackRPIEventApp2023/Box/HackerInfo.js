import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import EventObject from "./EventObject";

const HackerInfo = ({
  Hacker_Name,
  Table,
  BriefDescription,
  Description,
  isRed
}) => {
  const [isActive, setIsActive] = useState(false);
  const navigation = useNavigation();
  const hackerData = {
      Hacker_Name,
      Table,
      BriefDescription,
      Description,
      isRed,
  };
  const handleCheckmarkClick = () => {
    // Pass the hacker information to AnotherPage
    navigation.navigate('AnotherPage', {hackerData: hackerData});
  }

  return (
    <View style={styles.container}>
      <EventObject
        Hacker_Name={Hacker_Name}
        Table={Table}
        BriefDescription={BriefDescription}
        Description={Description}
        isRed={isRed}
      />
      <View
        style={styles.notifBox}
        backgroundColor={isRed ? "black" : isActive ? "black" : "white"}
        borderColor={isRed ? "red" : "white"}>
        <Feather
          name="check"
          size={30}
          color={"red"}
          onPress={handleCheckmarkClick}
          zIndex={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 10,
    marginBottom: 0,
  },
  notifBox: {
    width: 60,
    height: 100,
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    zIndex: 1,
  },
});

export default HackerInfo;
