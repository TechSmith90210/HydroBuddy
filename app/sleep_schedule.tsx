 
import CustomTimePicker from "@/components/TimePicker";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InfoScreen() {
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [bedTime, setBedTime] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <Feather name="sun" size={20} color="dodgerblue" />
          <Text style={styles.wakeUp}>Wake-up Time</Text>
        </View>

        <CustomTimePicker onTimeChange={setWakeUpTime} />
      </View>

      <View>
        <View style={styles.row}>
          <Feather name="moon" size={20} color="dodgerblue" />
          <Text style={styles.wakeUp}>Bedtime</Text>
        </View>
        <CustomTimePicker onTimeChange={setBedTime} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "dodgerblue",
          height: 50,
          width: "60%",
          borderRadius: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          router.push("/about_you");
          console.log("Wake-up Time:", wakeUpTime);
          console.log("Bedtime:", bedTime);
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
            textAlign: "center",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    padding: 30,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  wakeUp: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    marginLeft: 10,
  },
  timeText: {
    fontSize: 20,
    color: "dodgerblue",
    fontWeight: "500",
  },
  reminder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f8ff",
    borderRadius: 8,
  },
});
