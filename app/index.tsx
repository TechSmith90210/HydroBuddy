import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  return (
    <ImageBackground
      source={require("../assets/images/heroimg.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={styles.overlay} />

      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hello, I am here to keep you hydrated</Text>
        <TouchableOpacity onPress={() => {
                router.push("/sleep_schedule");
        }} style={styles.button}>
          <Text style={styles.buttonText}>Start the journey</Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  container: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    lineHeight: 38,
    color: "ghostwhite",
  },
  button: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: "dodgerblue",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 26,
  },
  buttonText: {
    flex: 1,
    color: "white",
    fontSize: 17,
    fontWeight: "400",
  },
});
