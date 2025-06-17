import {
  cancelHydrationReminder,
  scheduleHydrationReminder,
} from "@/utils/notifications/notificationHandler";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NotificationScreen() {
  const handleSetupNotifications = async () => {
    try {
      await scheduleHydrationReminder();
      Alert.alert(
        "Success",
        "Hydration reminders are now scheduled every 10 seconds (for testing)."
      );
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to schedule notification.");
    }
  };

  const handleCancelNotifications = async () => {
    try {
      await cancelHydrationReminder();
      Alert.alert("Cancelled", "All hydration reminders have been cancelled.");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to cancel notifications.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Setup</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSetupNotifications}
      >
        <Text style={styles.buttonText}>Setup Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={handleCancelNotifications}
      >
        <Text style={styles.buttonText}>Cancel Notifications</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Reminder: Notifications only appear when the app is in the background
        and not killed.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  cancelButton: {
    backgroundColor: "#EF4444", // red tone
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  note: {
    color: "gray",
    fontSize: 12,
    letterSpacing: 0.2,
    textAlign: "center",
    marginTop: 8,
  },
});
