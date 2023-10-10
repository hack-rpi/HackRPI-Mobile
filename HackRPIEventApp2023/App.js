import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calander from "./Box/Calander";

export default function App() {
  return (
    <View style={styles.container}>
      <Calander />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
  },
});
