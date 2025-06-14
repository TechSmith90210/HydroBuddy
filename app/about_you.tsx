/* eslint-disable @typescript-eslint/no-unused-vars */
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import React, { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AboutYouScreen() {
  const [age, setAge] = useState(18);
  const [ageText, setAgeText] = useState("18");

  const [weight, setWeight] = useState(40);
  const [weightText, setWeightText] = useState("40");

  const validateAge = () => {
    const numericAge = parseInt(ageText, 10);
    if (isNaN(numericAge) || numericAge < 0 || numericAge > 100) {
      Alert.alert("Invalid Age", "Please enter a valid age between 0 and 100.");
      setAge(18);
      setAgeText("18");
    } else {
      setAge(numericAge);
    }
  };

  const validateWeight = () => {
    const numericWeight = parseInt(weightText, 10);
    if (isNaN(numericWeight) || numericWeight <= 0 || numericWeight > 500) {
      Alert.alert(
        "Invalid Weight",
        "Oops! Weight should be between 30 and 300 kilograms."
      );
      setWeight(40);
      setWeightText("40");
    } else {
      setWeight(numericWeight);
    }
  };

  const onPressSubmit = ()=>{
    router.replace('/home')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <View style={styles.row}>
            <FontAwesome5 name="birthday-cake" size={20} color="dodgerblue" />
            <Text style={styles.label}>Age</Text>
          </View>
          <TextInput
            style={styles.input}
            value={ageText}
            onChangeText={setAgeText}
            onBlur={validateAge}
            keyboardType="numeric"
            placeholder="Enter your age"
            maxLength={3}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <FontAwesome5 name="weight" size={20} color="dodgerblue" />
            <Text style={styles.label}>Weight (kg)</Text>
          </View>
          <TextInput
            style={styles.input}
            value={weightText}
            onChangeText={setWeightText}
            onBlur={validateWeight}
            keyboardType="numeric"
            placeholder="Enter your weight"
            maxLength={3}
          />
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
        onPress={()=>
          onPressSubmit()
        }
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    gap: 40,
  },
  section: {
    width: "100%",
    alignItems: "center",
    gap: 14,
    flexDirection:"column",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    textAlign: "center",
    fontSize: 20,
    width: "50%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
});
