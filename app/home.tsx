import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const progress = 0.4; // 40% progress

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.greeting}>Welcome, Back!</Text>
          <Text style={styles.subGreeting}>Stay hydrated, stay healthy!</Text>

          <View style={styles.progressWrapper}>
            <View style={styles.progressSection}>
              <Text style={styles.title}>
                <Text style={{ color: "gray", fontSize: 18 }}>1200 ml </Text>/
                3000 ml
              </Text>
            </View>

            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${progress * 100}%` }]}
              />
            </View>
          </View>
        </View>
        <View style={[styles.bottomSheet]}>
          <View style={styles.bottomSheetHeader}>
            <View style = {{gap:6}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  letterSpacing: 0.4,
                  color: "#1b1b1b",
                }}
              >
                Today&apos;s Record
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  letterSpacing: 0.2,
                  color: "#1b1b1b",
                }}
              >
                History of intakes today
              </Text>
            </View>
            <TouchableOpacity style={styles.addIntakeButton} onPress={() => {}}>
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "ghostwhite",
  },
  container: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  greeting: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 8,
    letterSpacing: 0.8,
  },
  subGreeting: {
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.2,
  },
  progressWrapper: {
    marginTop: 30,
  },
  progressSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  progressBar: {
    height: 9,
    width: "100%",
    backgroundColor: "lightsteelblue",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "dodgerblue",
    borderRadius: 10,
  },
  bottomSheet: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f4f8",
    padding: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addIntakeButton:{
    padding:8,
    backgroundColor:"dodgerblue",
    borderRadius:8
  }
});
