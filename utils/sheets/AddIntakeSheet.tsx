import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { storage } from "../storage/storage";
export default function AddIntakeSheet() {
  const [glasses, setGlasses] = useState(1);
  const [intakeML, setIntakeML] = useState(250);

  const addGlass = () => {
    if (glasses >= 1) {
      setGlasses(glasses + 1);
      setIntakeML(intakeML + 250);
    }
  };

  const removeGlass = () => {
    if (glasses > 1) {
      setGlasses(glasses - 1);
      setIntakeML(intakeML - 250);
    }
  };

  const getFormattedTime = () =>
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const addIntake = () => {
    const intake = intakeML;
    const noOfGlasses = glasses;
    const dateKey = new Date().toLocaleDateString("en-CA"); // e.g. "2025-06-16"

    // Try to get existing history for today
    const existingData = storage.getString(dateKey);
    // console.log(existingData);
    const history = existingData ? JSON.parse(existingData) : [];

    const newEntry = {
      id: Date.now(), // or use a UUID lib for unique ID
      intake: intake,
      noOfGlasses: noOfGlasses,
      time: getFormattedTime(),
    };

    history.push(newEntry); // add new entry to history array
    storage.set(dateKey, JSON.stringify(history)); // save updated array

    const totalKey = `total_${dateKey}`;
    const existingTotal = storage.getNumber(totalKey) || 0;
    const newTotal = existingTotal + intake;
    storage.set(totalKey, newTotal);
    SheetManager.hide("add-intake-sheet");
  };

  let imageSource = 1;

  if (glasses === 1) {
    imageSource = require("../../assets/icons/glass1.png");
  } else if (glasses === 2) {
    imageSource = require("../../assets/icons/glass2.png");
  } else if (glasses >= 3) {
    imageSource = require("../../assets/icons/glass3.png");
  } else {
    imageSource = require("../../assets/icons/glass1.png");
  }

  return (
    <ActionSheet containerStyle={styles.actionSheet} headerAlwaysVisible>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={removeGlass}
            style={{
              padding: 7,
              backgroundColor: "slategrey",
              borderRadius: 10,
            }}
          >
            <AntDesign name="minus" size={24} color="white" />
          </TouchableOpacity>

          <View
            style={{
              padding: 20,
              backgroundColor: "ghostwhite",
              borderRadius: 10,
            }}
          >
            <Image
              source={imageSource}
              resizeMode="contain"
              style={{ height: 50, width: 50 }}
            />
          </View>
          <TouchableOpacity
            onPress={addGlass}
            style={{
              padding: 7,
              backgroundColor: "#3B82F6",
              borderRadius: 10,
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.intakeText}>
          {glasses}x Glass {intakeML} ml
        </Text>
        <TouchableOpacity
          style={styles.addIntakeButton}
          activeOpacity={0.8}
          onPress={addIntake}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Ionicons name="water" size={20} color="white" />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Add Drink
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  actionSheet: {
    padding: 20,
    height: "40%",
  },
  addIntakeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "dodgerblue",
    width: "80%",
    borderRadius: 25,
  },
  intakeText: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.2,
  },
});
