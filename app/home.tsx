import IntakeHistoryTile from "@/components/IntakeTile";
import getMotivationalMessage from "@/utils/messages/message";
import { storage } from "@/utils/storage/storage";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { SafeAreaView } from "react-native-safe-area-context";

type theProps = {
  id: string;
  intake: number;
  noOfGlasses: number;
  time: string;
};

export default function HomeScreen() {
  const dailyTotal = 3000;

  const [progress, setProgress] = useState(0);
  const [progressBar, setProgressBar] = useState(0);

  const [message, setMessage] = useState("");

  const getCurrentProgress = () => {
    const today = new Date().toLocaleDateString("en-CA");
    const progress = storage.getNumber(`total_${today}`) || 0;
    const computedProgressBar = (progress / dailyTotal) * 1;
    setProgress(progress);
    setProgressBar(computedProgressBar);
    let message = getMotivationalMessage(computedProgressBar * 100);
    setMessage(message);
    console.log("Saving to key:", new Date().toLocaleDateString("en-CA"));
  };

  useEffect(() => {
    getCurrentProgress();
  }, []);

  const [history, setHistory] = useState<theProps[]>([]);

  const getHistory = () => {
    const dateKey = new Date().toLocaleDateString("en-CA"); // e.g. "2025-06-16"
    const history = storage.getString(dateKey);
    const historyData = history ? JSON.parse(history) : [];
    setHistory(historyData);
  };
  useEffect(() => {
    getHistory();
  }, []);

  const onClickAddIntake = () => {
    SheetManager.show("add-intake-sheet").then(() => {
      getHistory();
      getCurrentProgress();
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.greeting}>Welcome, Back!</Text>
          <Text style={styles.subGreeting}>Stay hydrated, stay healthy!</Text>

          <View style={styles.progressWrapper}>
            <View style={styles.progressSection}>
              <Text style={styles.title}>
                <Text style={{ color: "gray", fontSize: 18 }}>{progress} </Text>
                / 3000 ml
              </Text>
            </View>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${progressBar * 100}%` },
                ]}
              />
            </View>
            {message && <Text style={styles.message}>{message}</Text>}
          </View>
        </View>
        {/* intake history with list */}
        <View style={[styles.bottomSheet]}>
          <View style={styles.bottomSheetHeader}>
            <View style={styles.recordTextContainer}>
              <Text style={styles.recordTitle}>Today’s Record</Text>
              <Text style={styles.recordSubtitle}>Your intake history</Text>
            </View>
            <TouchableOpacity
              style={styles.addIntakeButton}
              onPress={onClickAddIntake}
              activeOpacity={0.8}
            >
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <FlatList
            ListEmptyComponent={<Text>No Intake Yet</Text>}
            style={{ paddingTop: 10 }}
            data={[...history].reverse()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <IntakeHistoryTile intake={item.intake} time={item.time} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "ghostwhite", // softer than ghostwhite
  },
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
    letterSpacing: 0.5,
    color: "#1B1B1B",
  },
  subGreeting: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.2,
    color: "#6B7280", // cool gray
  },
  progressWrapper: {
    marginTop: 30,
  },
  progressSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1B1B1B",
  },
  progressBar: {
    height: 8,
    width: "100%",
    backgroundColor: "#E0E7FF", // soft indigo
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#3B82F6", // nicer blue
    borderRadius: 10,
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 20,
    borderTopWidth: 0.75,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -3 },
  },
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "#E5E7EB",
  },
  addIntakeButton: {
    padding: 10,
    backgroundColor: "#2563EB", // deeper blue
    borderRadius: 10,
  },
  recordTextContainer: {
    gap: 2,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  recordSubtitle: {
    fontSize: 13,
    fontWeight: "400",
    color: "#6B7280",
  },
  message: {
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "italic",
    letterSpacing: 0.2,
    lineHeight: 18, // fix for visibility
    color: "#374151", // cool dark gray
    marginTop: 10,
  },
});
