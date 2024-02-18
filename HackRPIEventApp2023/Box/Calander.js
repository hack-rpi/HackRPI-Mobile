import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Dimensions } from "react-native"; // Importing Dimensions from react-native
import CalanderObject from "./CalanderObject";
import WorkShops from "./WorkShops.json";
import Active_Check from "./Active_Check";
import Past_Check from "./Past_Check";
import Time_Convert from "./Time_Convert";
import CountdownTimer from "../Components/CountdownTimer";


// Calculate device width
const windowWidth = Dimensions.get('window').width;

// calander object that holds all events and handles which are visable, which are active, and which are upcoming.
const Calander = () => {
  return (
    <SafeAreaView style={styles.CalanderStyle}>
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={true}
        //pagingEnabled={true} // Enable paging
        //snapToInterval={150} // Set the interval to the height of a single rectangle
      >
        <CountdownTimer></CountdownTimer>

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
          if (Past) {
            return null; //if the event is in the past, don't display it
          }
          if (event.WorkShop_Title == "2023-12-04") {
            day = "Saturday";
          } else {
            day = "Sunday";
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
//   CalanderStyle: {
//     marginTop: 0,
//     marginBottom: 20,
//     backgroundColor: "transparent",
//     flex: 1,
//     justifyContent: "start",
//     alignItems: "left",
//     padding: 10,
//   },
// });
      container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      },
      scrollView: {
        width: windowWidth, // Set ScrollView width to device width
        paddingHorizontal: 20, // Adjust padding based on your design
      },
});

export default Calander;
