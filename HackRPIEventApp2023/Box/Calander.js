import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CalanderObject from "./CalanderObject";
import WorkShops from "./WorkShops.json";
import Active_Check from "./Active_Check";
import Past_Check from "./Past_Check";
import Time_Convert from "./Time_Convert";
import CountdownTimer from "../Components/CountdownTimer";

const Calander = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
      >
        <CountdownTimer />

        {WorkShops.map((event, index) => {
          const Active = Active_Check(
            event.WorkShop_Date,
            event.WorkShop_StartTime,
            event.WorkShop_EndTime
          );
          const Past = Past_Check(
            event.WorkShop_Date,
            event.WorkShop_StartTime,
            event.WorkShop_EndTime
          );
          const Start_Time = Time_Convert(event.WorkShop_StartTime);
          const End_Time = Time_Convert(event.WorkShop_EndTime);
          let day;
          if (event.WorkShop_Title === "2023-12-04") {
            day = "Saturday";
          } else {
            day = "Sunday";
          }
          if (Past) {
            return null;
          }
          return (
            <CalanderObject
              key={index}
              workshop_Title={event.WorkShop_Title}
              Time={day + ": " + Start_Time + " - " + End_Time}
              Presenter={event.WorkShop_Presenter}
              Location={event.WorkShop_Location}
              Description={event.WorkShop_Description}
              isRed={Active}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: Platform.OS === "android" ? 25 : 0, // Adjust for status bar
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: "transparent",
  },
});

export default Calander;
