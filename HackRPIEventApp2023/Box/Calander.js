import React  from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CalanderObject from "./CalanderObject";
import WorkShops from "./WorkShops.json";
import Active_Check from "./Active_Check";
import Past_Check from "./Past_Check";


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
      {WorkShops.map((event, index) => {
        const Active = Active_Check(event.WorkShop_Date, event.WorkShop_StartTime, 
        event.WorkShop_EndTime);
        const Past = Past_Check(event.WorkShop_Date, event.WorkShop_StartTime,
        event.WorkShop_EndTime);
        if(Past){
          return null; //if the event is in the past, don't display it
        }
        start_hour = parseInt(event.WorkShop_StartTime.split(":")[0]);
        start_minute = event.WorkShop_StartTime.split(":")[1];
        end_hour = parseInt(event.WorkShop_EndTime.split(":")[0]);
        end_minute = event.WorkShop_EndTime.split(":")[1];
        if(start_hour > 12){
          start_hour = start_hour - 12;
          event.WorkShop_StartTime = start_hour.toString() + ":" + start_minute + " PM";
        }
        else if(start_hour == 12){
          event.WorkShop_StartTime = start_hour.toString() + ":" + start_minute + " PM";
        }
        else if(start_hour == 0){
          event.WorkShop_StartTime = "12:" + start_minute + " AM";
        }
        else{
          event.WorkShop_StartTime = start_hour.toString() + ":" + start_minute + " AM";
        }
        
        if(end_hour > 12){
          end_hour = end_hour - 12;
          event.WorkShop_EndTime = end_hour.toString() + ":" + end_minute + " PM";
        }
        else if(end_hour == 12){
          event.WorkShop_EndTime = end_hour.toString() + ":" + end_minute + " PM";
        }
        else if(end_hour == 0){
          event.WorkShop_EndTime = "12:" + end_minute + " AM";
        }
        else{
          event.WorkShop_EndTime = end_hour.toString() + ":" + end_minute + " AM";
        }
        return (
          <CalanderObject
            key={index}
            workshop_Title={event.WorkShop_Title}
            Time={event.WorkShop_Date + ": " + event.WorkShop_StartTime + " - " + 
            event.WorkShop_EndTime}
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
  CalanderStyle: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: 16,
  },
});

export default Calander;
